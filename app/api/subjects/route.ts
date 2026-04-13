import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET() {
  const items = await prisma.subject.findMany({ orderBy: { subject_name: "asc" } });
  return NextResponse.json({ ok: true, items });
}

export async function POST(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "admin") return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const subject_name = (body.subject_name || "").trim();
  const code = (body.code || "").trim() || null;
  if (!subject_name) return NextResponse.json({ message: "Nama mapel wajib diisi." }, { status: 400 });
  const item = await prisma.subject.create({ data: { subject_name, code } });
  return NextResponse.json({ ok: true, item });
}
