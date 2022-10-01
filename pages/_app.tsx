
import type { AppProps } from 'next/app';
import {MdxComponentsProvider} from '../context/mdxContext';

//import '../styles/globals.css'
//import '../styles/app.css'

import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MdxComponentsProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MdxComponentsProvider>
    </>
  );
}

export default MyApp
