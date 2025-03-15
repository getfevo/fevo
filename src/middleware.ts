import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	// Get hostname from the request URL
	const hostname = request.headers.get("host") || "";
	const isProduction = process.env.NODE_ENV === "production";
	
	// Get session cookie with proper domain awareness
	const session = getSessionCookie(request.headers, {
		cookieName: "session_token",
		cookiePrefix: "better-auth",
	});

	// Debugging Logs - only in development
	if (!isProduction) {
		console.log("Middleware triggered on:", request.url);
		console.log("Session Cookie:", session);
		console.log("Hostname:", hostname);
	}

	// Check if session exists
	if (!session) {
		const response = NextResponse.redirect(new URL("/login", request.url));

		// Prevent caching issues - uncommented for production
		response.headers.set("Cache-Control", "no-store, max-age=0");
		
		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};