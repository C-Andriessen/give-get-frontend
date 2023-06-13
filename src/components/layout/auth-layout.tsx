import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { LayoutProps } from './common-layout';
import { Placeholder } from '../common/placeholder';
import { useSession } from 'next-auth/react';

export function AuthLayout({ children }: LayoutProps): JSX.Element {
  const [pending, setPending] = useState(true);
  const { status } = useSession();
  const { replace } = useRouter();

  useEffect(() => {
    const checkLogin = async (): Promise<void> => {
      setPending(true);

      if (status === "authenticated") {
        void replace('/');
        // setPending(false);
      } else if (status === "unauthenticated") {
        setPending(false);
      }
    };

    void checkLogin();
  }, [status, replace]);

  if (pending) return <Placeholder />;

  return <>{children}</>;
}
