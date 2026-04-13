import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const role = req.nextUrl.searchParams.get("role");

    const items = await prisma.user.findMany({
      where: role
        ? {
            roles: {
              some: {
                role: {
                  name: role,
                },
              },
            },
          }
        : undefined,
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
      orderBy: {
        full_name: "asc",
      },
    });

    return NextResponse.json({ ok: true, items });
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data user." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const full_name = (body.full_name || "").trim();
    const username = (body.username || "").trim();
    const email = (body.email || "").trim();
    const password = (body.password || "").trim();
    const roleName = (body.role || "").trim();

    if (!full_name || !username || !email || !password || !roleName) {
      return NextResponse.json(
        { message: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Username atau email sudah digunakan." },
        { status: 400 }
      );
    }

    const role = await prisma.role.findFirst({
      where: { name: roleName },
    });

    if (!role) {
      return NextResponse.json(
        { message: "Role tidak ditemukan." },
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        full_name,
        username,
        email,
        password_hash,
      },
    });

    await prisma.userRole.create({
      data: {
        user_id: user.id,
        role_id: role.id,
      },
    });

    return NextResponse.json({ ok: true, item: user });
  } catch (error) {
    console.error("POST /api/users error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat menyimpan user." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const id = Number(body.id);
    const full_name = (body.full_name || "").trim();
    const username = (body.username || "").trim();
    const email = (body.email || "").trim();
    const roleName = (body.role || "").trim();
    const password = (body.password || "").trim();

    if (!id || !full_name || !username || !email || !roleName) {
      return NextResponse.json(
        { message: "Data edit tidak lengkap." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan." },
        { status: 404 }
      );
    }

    const duplicate = await prisma.user.findFirst({
      where: {
        AND: [
          { id: { not: id } },
          {
            OR: [{ username }, { email }],
          },
        ],
      },
    });

    if (duplicate) {
      return NextResponse.json(
        { message: "Username atau email sudah dipakai user lain." },
        { status: 400 }
      );
    }

    const role = await prisma.role.findFirst({
      where: { name: roleName },
    });

    if (!role) {
      return NextResponse.json(
        { message: "Role tidak ditemukan." },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id },
      data: {
        full_name,
        username,
        email,
        ...(password
          ? { password_hash: await bcrypt.hash(password, 10) }
          : {}),
      },
    });

    await prisma.userRole.deleteMany({
      where: { user_id: id },
    });

    await prisma.userRole.create({
      data: {
        user_id: id,
        role_id: role.id,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PATCH /api/users error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat memperbarui user." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = getSessionFromRequest(req);

    if (!session || session.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const id = Number(req.nextUrl.searchParams.get("id"));

    if (!id) {
      return NextResponse.json(
        { message: "ID user tidak valid." },
        { status: 400 }
      );
    }

    await prisma.userRole.deleteMany({
      where: { user_id: id },
    });

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/users error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat menghapus user." },
      { status: 500 }
    );
  }
}