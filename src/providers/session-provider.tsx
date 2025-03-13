'use client';

import { useEffect, useState } from 'react';
import { authClient } from '@/lib/authClient';

export interface SessionProviderProps {
  children: React.ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, isPending, error } = authClient.useSession();

  // This ensures session is loaded before rendering content
  useEffect(() => {
    if (!isPending) {
      setIsLoading(false);
      
      // Log session status for debugging
      if (session) {
        console.log('Session loaded:', session);
      } else if (error) {
        console.error('Session error:', error);
      } else {
        console.log('No active session');
      }
    }
  }, [isPending, session, error]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 