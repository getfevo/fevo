import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    // const sessionCookie = getSessionCookie(request) // Broken

    if (!request.cookies.has("better-auth.session_token")) {
        const redirectTo = request.nextUrl.pathname + request.nextUrl.search
        return NextResponse.redirect(new URL(`/login`, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard"]
}