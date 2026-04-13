import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const items = await prisma.enrollment.findMany({ include: { student: true, class: true }, orderBy: { id: 'desc' } });
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const student_id = Number(body.student_id);
  const class_id = Number(body.class_id);
  if (!student_id || !class_id) return NextResponse.json({ message: 'student_id dan class_id wajib diisi.' }, { status: 400 });
  const existing = await prisma.enrollment.findFirst({ where: { student_id, class_id } });
  if (existing) return NextResponse.json({ message: 'Siswa sudah terdaftar di kelas ini.' }, { status: 400 });
  const item = await prisma.enrollment.create({ data: { student_id, class_id } });
  return NextResponse.json({ ok: true, item });
}
