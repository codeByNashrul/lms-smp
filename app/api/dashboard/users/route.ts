import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);

  if (!session || session.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const [adminCount, guruCount, siswaCount] = await Promise.all([
    prisma.userRole.count({
      where: {
        role: {
          name: "admin",
        },
      },
    }),
    prisma.userRole.count({
      where: {
        role: {
          name: "guru",
        },
      },
    }),
    prisma.userRole.count({
      where: {
        role: {
          name: "siswa",
        },
      },
    }),
  ]);

  return NextResponse.json({
    ok: true,
    items: [
      { name: "Admin", total: adminCount },
      { name: "Guru", total: guruCount },
      { name: "Siswa", total: siswaCount },
    ],
  });
}