import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	console.log("Middleware: ", request);
	const sessionCookie = getSessionCookie(request, {
        // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
		useSecureCookies: true,
    });
	console.log("Session cookie: ", sessionCookie);

	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard"], // Specify the routes the middleware applies to
};