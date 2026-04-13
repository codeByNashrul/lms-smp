import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";
import {
  uploadToLmsStorage,
  createSignedLmsUrl,
  deleteFromLmsStorage,
} from "@/lib/storage";

export async function GET(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "guru") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const items = await prisma.perangkatPembelajaran.findMany({
      where: {
        teacher_id: session.userId,
      },
      include: {
        class: true,
        subject: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const mapped = await Promise.all(
      items.map(async (item) => ({
        ...item,
        file_url: item.file_url
          ? await createSignedLmsUrl(item.file_url)
          : null,
      }))
    );

    return NextResponse.json({ ok: true, items: mapped });
  } catch (error) {
    console.error("GET /api/perangkat error:", error);
    return NextResponse.json(
      { message: "Gagal mengambil perangkat pembelajaran." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "guru") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const title = String(formData.get("title") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const type = String(formData.get("type") || "modul").trim();
    const class_id = Number(formData.get("class_id"));
    const subject_id = Number(formData.get("subject_id"));
    const file = formData.get("file") as File | null;

    if (!title || !class_id || !subject_id) {
      return NextResponse.json(
        { message: "title, class_id, dan subject_id wajib diisi." },
        { status: 400 }
      );
    }

    if (!file || file.size === 0) {
      return NextResponse.json(
        { message: "File perangkat pembelajaran wajib dipilih." },
        { status: 400 }
      );
    }

    if (file.size > 5_000_000) {
      return NextResponse.json(
        { message: "File terlalu besar, maksimal 5MB." },
        { status: 400 }
      );
    }

    const allowed = await prisma.teacherAssign.findFirst({
      where: {
        teacher_id: session.userId,
        class_id,
        subject_id,
      },
    });

    if (!allowed) {
      return NextResponse.json(
        { message: "Guru tidak memiliki assignment untuk kelas dan mapel tersebut." },
        { status: 403 }
      );
    }

    const uploaded = await uploadToLmsStorage({
      folder: "perangkat",
      file,
      classId: class_id,
      subjectId: subject_id,
      userId: session.userId,
    });

    const item = await prisma.perangkatPembelajaran.create({
      data: {
        title,
        description,
        type,
        class_id,
        subject_id,
        teacher_id: session.userId,
        file_url: uploaded.path,
      },
    });

    return NextResponse.json({ ok: true, item });
  } catch (error) {
    console.error("POST /api/perangkat error:", error);
    return NextResponse.json(
      { message: "Gagal menyimpan perangkat pembelajaran." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "guru") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const id = Number(formData.get("id"));
    const title = String(formData.get("title") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const type = String(formData.get("type") || "modul").trim();
    const class_id = Number(formData.get("class_id"));
    const subject_id = Number(formData.get("subject_id"));
    const file = formData.get("file") as File | null;

    if (!id || !title || !class_id || !subject_id) {
      return NextResponse.json(
        { message: "Data edit tidak lengkap." },
        { status: 400 }
      );
    }

    const existing = await prisma.perangkatPembelajaran.findFirst({
      where: {
        id,
        teacher_id: session.userId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Perangkat pembelajaran tidak ditemukan." },
        { status: 404 }
      );
    }

    const allowed = await prisma.teacherAssign.findFirst({
      where: {
        teacher_id: session.userId,
        class_id,
        subject_id,
      },
    });

    if (!allowed) {
      return NextResponse.json(
        { message: "Guru tidak memiliki assignment untuk kelas dan mapel tersebut." },
        { status: 403 }
      );
    }

    let file_url = existing.file_url;

    if (file && file.size > 0) {
      if (file.size > 5_000_000) {
        return NextResponse.json(
          { message: "File terlalu besar, maksimal 5MB." },
          { status: 400 }
        );
      }

      const uploaded = await uploadToLmsStorage({
        folder: "perangkat",
        file,
        classId: class_id,
        subjectId: subject_id,
        userId: session.userId,
      });

      if (existing.file_url) {
        await deleteFromLmsStorage(existing.file_url);
      }

      file_url = uploaded.path;
    }

    const item = await prisma.perangkatPembelajaran.update({
      where: { id },
      data: {
        title,
        description,
        type,
        class_id,
        subject_id,
        file_url,
      },
    });

    return NextResponse.json({ ok: true, item });
  } catch (error) {
    console.error("PATCH /api/perangkat error:", error);
    return NextResponse.json(
      { message: "Gagal memperbarui perangkat pembelajaran." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "guru") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = Number(req.nextUrl.searchParams.get("id"));

    if (!id) {
      return NextResponse.json(
        { message: "ID perangkat tidak valid." },
        { status: 400 }
      );
    }

    const existing = await prisma.perangkatPembelajaran.findFirst({
      where: {
        id,
        teacher_id: session.userId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Perangkat pembelajaran tidak ditemukan." },
        { status: 404 }
      );
    }

    if (existing.file_url) {
      await deleteFromLmsStorage(existing.file_url);
    }

    await prisma.perangkatPembelajaran.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/perangkat error:", error);
    return NextResponse.json(
      { message: "Gagal menghapus perangkat pembelajaran." },
      { status: 500 }
    );
  }
}