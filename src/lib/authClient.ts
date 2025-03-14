import { createAuthClient } from "better-auth/react"

// Determine the base URL based on environment or use the browser's origin in client context
const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000";
};

export const authClient = createAuthClient({
    baseURL: getBaseURL() // Dynamically use the correct base URL
})


export const { signIn, signUp, signOut, useSession, getSession, $fetch } = authClient;

