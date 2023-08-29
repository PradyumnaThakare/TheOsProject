
import type { AppProps } from 'next/app'
import React, { FC, ReactElement } from "react";
import Head from "next/head";
import {name} from "package.json";
import StyledApp from 'components/pages/StyledApp';





export default function App({ Component, pageProps }:AppProps):ReactElement {
  return( 
  <>
  <Head>
    <title>{name}</title>
    <meta name="description" content={"The OS project"}/>
  </Head>
  <StyledApp>
  <Component {...pageProps} />
  </StyledApp>
  </>
  )
}
 