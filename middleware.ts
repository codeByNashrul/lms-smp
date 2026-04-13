import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "lms_token";

function getJwtSecret(): Uint8Array {
  const secret = process.env.LMS_JWT_SECRET;
  if (!secret) {
    return new TextEncoder().encode("__missing_secret__");
  }
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (
    pathname === "/" ||                  // homepage publik
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;

  let role: string | null = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, getJwtSecret());
      role = typeof payload.role === "string" ? payload.role : null;
    } catch {
      role = null;
    }
  }

  // Not logged in
  if (!role) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // RBAC
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/guru") && role !== "guru") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/siswa") && role !== "siswa") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};