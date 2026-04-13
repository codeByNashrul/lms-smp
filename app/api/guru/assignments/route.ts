import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session || session.role !== "guru") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const items = await prisma.teacherAssign.findMany({
    where: { teacher_id: session.userId },
    include: { class: true, subject: true },
    orderBy: { id: 'desc' },
  });

  return NextResponse.json({ ok: true, items });
}
