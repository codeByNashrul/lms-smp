import { NextResponse, type NextRequest } from "next/server";
import { getSessionFromRequest } from "@/lib/lms-auth";

export async function GET(req: NextRequest) {
  const session = getSessionFromRequest(req);
  if (!session) return NextResponse.json({ ok: false }, { status: 401 });
  return NextResponse.json({ ok: true, session });
}