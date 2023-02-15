import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from "next/head";
import React, { ReactElement, ReactNode } from 'react';
import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, shrink-to-fit=no'
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
