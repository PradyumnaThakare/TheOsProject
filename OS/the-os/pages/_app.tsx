
import type { AppProps } from 'next/app'
import React, { FC, ReactElement } from "react";
import Head from "next/head";
import {description,name} from "package.json";
import StyledApp from 'components/pages/StyledApp';
import MetaData from 'components/pages/Metadata';




export default function App({ Component, pageProps }:AppProps):ReactElement {
  return( 
  <>
  <MetaData/>
  <StyledApp>
  <Component {...pageProps} />
  </StyledApp>
  </>
  )
}
 