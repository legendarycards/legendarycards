
import type { AppProps } from 'next/app';
import Script from 'next/script';
import {MdxComponentsProvider} from '../context/mdxContext';

import '../styles/globals.css';
import "../styles/carousel.css";

import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <MdxComponentsProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MdxComponentsProvider>
    </>
  );
}

export default MyApp
