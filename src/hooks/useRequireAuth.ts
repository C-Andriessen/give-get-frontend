import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { DefaultSession } from 'next-auth';

export function useRequireAuth(redirectUrl?: string): DefaultSession | null {
  const { data: session, status } = useSession();
  const { replace } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      void replace(redirectUrl ?? '/login');
    }
  }, [status, session, replace]);

  return session;
}
