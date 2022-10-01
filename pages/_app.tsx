
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head'
import {MdxComponentsProvider} from '../context/mdxContext';

import '../styles/globals.css'

import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>legendary.cards</title>
        <meta property="og:title" content="legendary.cards" key="title" />
        <meta
          name="description"
          content="A curated list of rare Pokemon card variants that were published by Wizards of the Coast between 1999-2013."
        />
        <meta
          property="og:description"
          content="A curated list of rare Pokemon card variants that were published by Wizards of the Coast between 1999-2013."
        />
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy="lazyOnload" id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </Head>
      <MdxComponentsProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MdxComponentsProvider>
    </>
  );
}

export default MyApp
