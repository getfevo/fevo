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

  if (!sessionCookie) {
    const redirectResponse = NextResponse.redirect(
      new URL("/login", request.url)
    );
    redirectResponse.headers.set("x-middleware-cache", "no-cache");
    return redirectResponse;
  }

  const response = NextResponse.next();
  // Enable only to test the one tap login in localhost
  //response.headers.set("Referrer-Policy", "no-referrer-when-downgrade");
  return response;
}

export const config = {
  matcher: [
    "/dashboard",
  ],
};
