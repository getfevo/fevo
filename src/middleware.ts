import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const session = getSessionCookie(request, {
        // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
		cookieName: "session_token",
		cookiePrefix: "better-auth",
    });

	// Check if session exists
	if (!session) {
		const response = NextResponse.redirect(new URL("/login", request.url));

		// Prevent caching issues
		//response.headers.set("Cache-Control", "no-store");

		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};