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

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.role === "siswa") {
      const enrollments = await prisma.enrollment.findMany({
        where: { student_id: session.userId },
        select: { class_id: true },
      });

      const classIds = enrollments.map((x) => x.class_id);

      const items = await prisma.assignment.findMany({
        where: { class_id: { in: classIds } },
        include: {
          class: true,
          subject: true,
          teacher: {
            select: {
              id: true,
              full_name: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      const mapped = await Promise.all(
        items.map(async (item) => ({
          ...item,
          attachment_url: item.attachment_url
            ? await createSignedLmsUrl(item.attachment_url)
            : null,
        }))
      );

      return NextResponse.json({ ok: true, items: mapped });
    }

    if (session.role === "guru") {
      const items = await prisma.assignment.findMany({
        where: { teacher_id: session.userId },
        include: {
          class: true,
          subject: true,
        },
        orderBy: { createdAt: "desc" },
      });

      const mapped = await Promise.all(
        items.map(async (item) => ({
          ...item,
          attachment_url: item.attachment_url
            ? await createSignedLmsUrl(item.attachment_url)
            : null,
        }))
      );

      return NextResponse.json({ ok: true, items: mapped });
    }

    const items = await prisma.assignment.findMany({
      include: {
        class: true,
        subject: true,
        teacher: {
          select: {
            id: true,
            full_name: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const mapped = await Promise.all(
      items.map(async (item) => ({
        ...item,
        attachment_url: item.attachment_url
          ? await createSignedLmsUrl(item.attachment_url)
          : null,
      }))
    );

    return NextResponse.json({ ok: true, items: mapped });
  } catch (error) {
    console.error("GET /api/assignments error:", error);
    return NextResponse.json(
      { message: "Gagal mengambil data tugas." },
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
    const due_at_raw = String(formData.get("due_at") || "").trim();
    const class_id = Number(formData.get("class_id"));
    const subject_id = Number(formData.get("subject_id"));
    const file = formData.get("file") as File | null;

    if (!title || !class_id || !subject_id) {
      return NextResponse.json(
        { message: "title, class_id, dan subject_id wajib diisi." },
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

    let attachment_url: string | null = null;

    if (file && file.size > 0) {
      if (file.size > 5_000_000) {
        return NextResponse.json(
          { message: "File terlalu besar, maksimal 5MB." },
          { status: 400 }
        );
      }

      const uploaded = await uploadToLmsStorage({
        folder: "tugas",
        file,
        classId: class_id,
        subjectId: subject_id,
        userId: session.userId,
      });

      attachment_url = uploaded.path;
    }

    const created = await prisma.assignment.create({
      data: {
        title,
        description,
        due_at: due_at_raw ? new Date(due_at_raw) : null,
        attachment_url,
        class_id,
        subject_id,
        teacher_id: session.userId,
      },
    });

    return NextResponse.json({ ok: true, item: created });
  } catch (error) {
    console.error("POST /api/assignments error:", error);
    return NextResponse.json(
      { message: "Gagal menyimpan tugas." },
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
    const due_at_raw = String(formData.get("due_at") || "").trim();
    const class_id = Number(formData.get("class_id"));
    const subject_id = Number(formData.get("subject_id"));
    const file = formData.get("file") as File | null;

    if (!id || !title || !class_id || !subject_id) {
      return NextResponse.json(
        { message: "Data edit tidak lengkap." },
        { status: 400 }
      );
    }

    const existing = await prisma.assignment.findFirst({
      where: {
        id,
        teacher_id: session.userId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Tugas tidak ditemukan." },
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

    let attachment_url = existing.attachment_url;

    if (file && file.size > 0) {
      if (file.size > 5_000_000) {
        return NextResponse.json(
          { message: "File terlalu besar, maksimal 5MB." },
          { status: 400 }
        );
      }

      const uploaded = await uploadToLmsStorage({
        folder: "tugas",
        file,
        classId: class_id,
        subjectId: subject_id,
        userId: session.userId,
      });

      if (existing.attachment_url) {
        await deleteFromLmsStorage(existing.attachment_url);
      }

      attachment_url = uploaded.path;
    }

    const updated = await prisma.assignment.update({
      where: { id },
      data: {
        title,
        description,
        due_at: due_at_raw ? new Date(due_at_raw) : null,
        attachment_url,
        class_id,
        subject_id,
      },
    });

    return NextResponse.json({ ok: true, item: updated });
  } catch (error) {
    console.error("PATCH /api/assignments error:", error);
    return NextResponse.json(
      { message: "Gagal memperbarui tugas." },
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
        { message: "ID tugas tidak valid." },
        { status: 400 }
      );
    }

    const existing = await prisma.assignment.findFirst({
      where: {
        id,
        teacher_id: session.userId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Tugas tidak ditemukan." },
        { status: 404 }
      );
    }

    if (existing.attachment_url) {
      await deleteFromLmsStorage(existing.attachment_url);
    }

    await prisma.assignment.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/assignments error:", error);
    return NextResponse.json(
      { message: "Gagal menghapus tugas." },
      { status: 500 }
    );
  }
}