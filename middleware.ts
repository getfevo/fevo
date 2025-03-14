import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check for session cookie
  const session = request.cookies.get("auth-session");

  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // Define public routes that don't require authentication
  const isPublicRoute = 
    pathname === "/" || 
    pathname === "/login" || 
    pathname === "/register" || 
    pathname === "/api/auth/login" || 
    pathname === "/api/auth/register" || 
    pathname === "/api/auth/get-session" || 
    pathname.startsWith("/_next") || 
    pathname.startsWith("/api/auth") || 
    pathname.includes(".") || 
    pathname.startsWith("/pricing");

  // If the route is public, allow access
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Check if user has a session
  if (!session) {
    // Redirect to login if no session and trying to access protected route
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // If user has a session, allow access to protected routes
  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (stored images)
     * - public (public assets)
     */
    "/((?!_next/static|_next/image|favicon.ico|images|public).*)",
  ],
}; 