import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);

  if (!session || session.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const [
    totalUsers,
    totalClasses,
    totalSubjects,
    totalMaterials,
    totalAssignments,
    totalAnnouncements,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.class.count(),
    prisma.subject.count(),
    prisma.material.count(),
    prisma.assignment.count(),
    prisma.announcement.count(),
  ]);

  return NextResponse.json({
    ok: true,
    data: {
      totalUsers,
      totalClasses,
      totalSubjects,
      totalMaterials,
      totalAssignments,
      totalAnnouncements,
    },
  });
}