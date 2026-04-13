import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
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

    const items = await prisma.announcement.findMany({
      where: {
        OR: [
          { scope: "all" },
          { scope: "class", class_id: { in: classIds } },
        ],
      },
      include: {
        class: true,
        creator: {
          select: { id: true, full_name: true, username: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ ok: true, items });
  }

  const items = await prisma.announcement.findMany({
    include: {
      class: true,
      creator: {
        select: { id: true, full_name: true, username: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ ok: true, items });
}

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || (session.role !== "admin" && session.role !== "guru")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const scope = (body.scope || "all").trim();
  const title = (body.title || "").trim();
  const content = (body.content || "").trim();
  const class_id = body.class_id ? Number(body.class_id) : null;

  if (!title || !content) {
    return NextResponse.json({ message: "Judul dan isi pengumuman wajib diisi." }, { status: 400 });
  }

  if (scope === "class" && !class_id) {
    return NextResponse.json({ message: "class_id wajib diisi untuk pengumuman kelas." }, { status: 400 });
  }

  const item = await prisma.announcement.create({
    data: {
      scope,
      class_id: scope === "class" ? class_id : null,
      created_by: session.userId,
      title,
      content,
    },
  });

  return NextResponse.json({ ok: true, item });
}
