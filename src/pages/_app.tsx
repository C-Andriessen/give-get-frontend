import '@/styles/globals.scss';
import { AppHead } from '@/components/common/app-head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeContextProvider } from '@/context/theme-context';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, title?: string) => ReactNode;
  title?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);

  return (
    <>
      <AppHead />
      <SessionProvider session={pageProps.session}>
        <ThemeContextProvider>
          {getLayout(<Component {...pageProps} />, Component.title)}
        </ThemeContextProvider>
      </SessionProvider>
    </>
  );
}
