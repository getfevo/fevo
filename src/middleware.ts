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
  const pathname = requestUrl.pathname;

  // List of public routes that don't require authentication
  const publicRoutes = ["/login", "/register", "/featureboard", "/", "/api"];
  
  // Check if the current path starts with any of the public routes
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // Redirect authenticated users away from login page to dashboard
  if ((pathname === "/login" || pathname === "/register") && sessionCookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!sessionCookie && !isPublicRoute) {
    const redirectResponse = NextResponse.redirect(
      new URL("/login", request.url)
    );
    redirectResponse.headers.set("x-middleware-cache", "no-cache");
    return redirectResponse;
  }

  const response = NextResponse.next();
  return response;
}

// Update the matcher to include all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
