import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { signSessionToken, LmsRole, COOKIE_NAME } from "@/lib/lms-auth";

type Body = {
  username: string;
  password: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const username = (body.username || "").trim();
  const password = body.password || "";
  if (!username || !password) {
    return NextResponse.json(
      { message: "Username dan password wajib diisi." },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { username },
    include: { roles: { include: { role: true } } },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Akun tidak ditemukan." },
      { status: 401 }
    );
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    return NextResponse.json(
      { message: "Username atau password salah." },
      { status: 401 }
    );
  }

  const roleName = user.roles?.[0]?.role?.name as LmsRole | undefined;
  const role: LmsRole = roleName || "siswa";

  const token = await signSessionToken({
    userId: user.id,
    role,
    username: user.username,
    fullName: user.full_name,
  });

  const res = NextResponse.json({ ok: true, role });

  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });

  return res;
}