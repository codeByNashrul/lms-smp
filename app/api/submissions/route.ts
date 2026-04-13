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

    const assignmentId = Number(req.nextUrl.searchParams.get("assignment_id"));

    if (session.role === "siswa") {
      const items = await prisma.submission.findMany({
        where: {
          student_id: session.userId,
          ...(assignmentId ? { assignment_id: assignmentId } : {}),
        },
        include: {
          assignment: true,
        },
        orderBy: { submitted_at: "desc" },
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
    }

    if (session.role === "guru") {
      const items = await prisma.submission.findMany({
        where: assignmentId ? { assignment_id: assignmentId } : {},
        include: {
          assignment: {
            include: {
              class: true,
              subject: true,
            },
          },
          student: true,
        },
        orderBy: { submitted_at: "desc" },
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
    }

    return NextResponse.json({ ok: true, items: [] });
  } catch (error) {
    console.error("GET /api/submissions error:", error);
    return NextResponse.json(
      { message: "Gagal mengambil data submission." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "siswa") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const assignment_id = Number(formData.get("assignment_id"));
    const file = formData.get("file") as File | null;

    if (!assignment_id) {
      return NextResponse.json(
        { message: "assignment_id wajib diisi." },
        { status: 400 }
      );
    }

    if (!file || file.size === 0) {
      return NextResponse.json(
        { message: "File jawaban wajib dipilih." },
        { status: 400 }
      );
    }

    if (file.size > 5_000_000) {
      return NextResponse.json(
        { message: "File terlalu besar, maksimal 5MB." },
        { status: 400 }
      );
    }

    const assignment = await prisma.assignment.findUnique({
      where: { id: assignment_id },
    });

    if (!assignment) {
      return NextResponse.json(
        { message: "Tugas tidak ditemukan." },
        { status: 404 }
      );
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        student_id: session.userId,
        class_id: assignment.class_id,
      },
    });

    if (!enrollment) {
      return NextResponse.json(
        { message: "Kamu tidak terdaftar pada kelas tugas ini." },
        { status: 403 }
      );
    }

    const uploaded = await uploadToLmsStorage({
      folder: "submission",
      file,
      classId: assignment.class_id,
      subjectId: assignment.subject_id,
      userId: session.userId,
    });

    const existing = await prisma.submission.findFirst({
      where: {
        assignment_id,
        student_id: session.userId,
      },
    });

    if (existing) {
      if (existing.file_url) {
        await deleteFromLmsStorage(existing.file_url);
      }

      const updated = await prisma.submission.update({
        where: { id: existing.id },
        data: {
          file_url: uploaded.path,
          submitted_at: new Date(),
          status: "submitted",
        },
      });

      return NextResponse.json({ ok: true, item: updated, mode: "updated" });
    }

    const created = await prisma.submission.create({
      data: {
        assignment_id,
        student_id: session.userId,
        file_url: uploaded.path,
        submitted_at: new Date(),
        status: "submitted",
      },
    });

    return NextResponse.json({ ok: true, item: created, mode: "created" });
  } catch (error) {
    console.error("POST /api/submissions error:", error);
    return NextResponse.json(
      { message: "Gagal mengirim submission." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "siswa") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = Number(req.nextUrl.searchParams.get("id"));

    if (!id) {
      return NextResponse.json(
        { message: "ID submission tidak valid." },
        { status: 400 }
      );
    }

    const existing = await prisma.submission.findFirst({
      where: {
        id,
        student_id: session.userId,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { message: "Submission tidak ditemukan." },
        { status: 404 }
      );
    }

    if (existing.file_url) {
      await deleteFromLmsStorage(existing.file_url);
    }

    await prisma.submission.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/submissions error:", error);
    return NextResponse.json(
      { message: "Gagal menghapus submission." },
      { status: 500 }
    );
  }
}