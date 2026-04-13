import "server-only";
import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export type LmsRole = "admin" | "guru" | "siswa";
export const COOKIE_NAME = "lms_token";

export function getJwtSecret() {
  const s = process.env.LMS_JWT_SECRET;
  if (!s || s.length < 32) throw new Error("LMS_JWT_SECRET invalid");
  return s;
}

export async function signSessionToken(payload: {
  userId: number;
  role: LmsRole;
  username: string;
  fullName: string;
}) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

export type LmsSession = {
  userId: number;
  role: LmsRole;
  username: string;
  fullName: string;
} | null;

export function getSessionFromRequest(req: NextRequest): LmsSession {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, getJwtSecret()) as any;
    return {
      userId: Number(decoded.userId),
      role: decoded.role as LmsRole,
      username: String(decoded.username),
      fullName: String(decoded.fullName),
    };
  } catch {
    return null;
  }
}