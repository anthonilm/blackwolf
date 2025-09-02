import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  const isMobile = /android|iphone|ipad|mobile/i.test(ua);

  // Redirect mobile users from /noesis-methods → /api/export-methods-pdf
  if (isMobile && request.nextUrl.pathname === "/noesis-methods") {
    const url = request.nextUrl.clone();
    url.pathname = "/api/export-methods-pdf";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply only to /noesis-methods route
export const config = {
  matcher: ["/noesis-methods"],
};
