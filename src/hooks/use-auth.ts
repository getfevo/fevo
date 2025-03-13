'use client';

import { authClient } from '@/lib/authClient';

export function useAuth() {
  const { data: session, isPending, error } = authClient.useSession();
  
  return {
    session,
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    isLoading: isPending,
    error,
    signIn: authClient.signIn,
    signUp: authClient.signUp,
    signOut: authClient.signOut,
  };
} 