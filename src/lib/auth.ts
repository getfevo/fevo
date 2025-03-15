import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { user, session, account, verification } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

// Determine environment
const isProduction = process.env.NODE_ENV === "production";
const domain = isProduction 
    ? process.env.NEXT_PUBLIC_APP_URL 
    : process.env.NEXT_PUBLIC_DEV_URL || undefined;
const secure = process.env.NEXT_PUBLIC_COOKIE_SECURE === "true" || isProduction;

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            user,
            session,
            account,
            verification,
        },
    }),
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
        cookie: {
            domain: domain,
            secure: secure,
            sameSite: isProduction ? "strict" : "lax",
            path: "/",
        }
    },
    emailAndPassword: {  
        enabled: true
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [nextCookies()],
});