import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET() {
  const items = await prisma.teacherAssign.findMany({
    include: { teacher: true, class: true, subject: true },
    orderBy: { id: "desc" },
  });
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const teacher_id = Number(body.teacher_id);
  const class_id = Number(body.class_id);
  const subject_id = Number(body.subject_id);
  if (!teacher_id || !class_id || !subject_id) return NextResponse.json({ message: "teacher_id, class_id, dan subject_id wajib diisi." }, { status: 400 });
  const existing = await prisma.teacherAssign.findFirst({ where: { teacher_id, class_id, subject_id } });
  if (existing) return NextResponse.json({ message: "Assignment guru sudah ada." }, { status: 400 });
  const item = await prisma.teacherAssign.create({ data: { teacher_id, class_id, subject_id } });
  return NextResponse.json({ ok: true, item });
}
