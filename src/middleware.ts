import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Manual cookie parsing as temporary workaround
  const cookieHeader = request.headers.get("cookie");
  const cookies = cookieHeader?.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc.set(key, value);
    return acc;
  }, new Map());

  const sessionCookie =
    cookies?.get("better-auth.session_token") ||
    cookies?.get("__Secure-better-auth.session_token");

  const requestUrl = new URL(request.url);

  // Redirect authenticated users away from login page to dashboard
  if (requestUrl.pathname === "/login" && sessionCookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!sessionCookie && requestUrl.pathname === "/dashboard") {
    const redirectResponse = NextResponse.redirect(
      new URL("/login", request.url)
    );
    redirectResponse.headers.set("x-middleware-cache", "no-cache");
    return redirectResponse;
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
