import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

async function ensureAdmin(req: NextRequest) {
  const session = getSessionFromRequest(req);
  return !!session && session.role === "admin";
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await req.json();
  const item = await prisma.class.update({
    where: { id: Number(id) },
    data: {
      class_name: body.class_name,
      grade_level: body.grade_level || null,
    },
  });
  return NextResponse.json({ ok: true, item });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await ensureAdmin(req))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const classId = Number(id);
  const [enrollments, materials, assignments, teacherAssign, announcements] = await Promise.all([
    prisma.enrollment.count({ where: { class_id: classId } }),
    prisma.material.count({ where: { class_id: classId } }),
    prisma.assignment.count({ where: { class_id: classId } }),
    prisma.teacherAssign.count({ where: { class_id: classId } }),
    prisma.announcement.count({ where: { class_id: classId } }),
  ]);
  if (enrollments || materials || assignments || teacherAssign || announcements) {
    return NextResponse.json({ message: "Kelas tidak bisa dihapus karena sudah dipakai data lain." }, { status: 400 });
  }
  await prisma.class.delete({ where: { id: classId } });
  return NextResponse.json({ ok: true });
}
