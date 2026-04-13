import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET() {
  const items = await prisma.class.findMany({ orderBy: { class_name: "asc" } });
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const class_name = (body.class_name || "").trim();
  const grade_level = (body.grade_level || "").trim() || null;
  if (!class_name) return NextResponse.json({ message: "Nama kelas wajib diisi." }, { status: 400 });
  const item = await prisma.class.create({ data: { class_name, grade_level } });
  return NextResponse.json({ ok: true, item });
}
