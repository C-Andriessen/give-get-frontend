import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Give & Get</title>
      <meta name='og:title' content='Give & Get' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
    </Head>
  );
}
