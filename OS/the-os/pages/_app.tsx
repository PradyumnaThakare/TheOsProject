
import type { AppProps } from 'next/app'
import React, { ReactElement } from "react";
import Head from "next/head";
import {name} from "package.json";
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle=createGlobalStyle`
  html,
 body{
  padding: 0;
  margin: 0;
 }
 *{
  box-sizing: border-box;
 }
`;

const theme={
  colors:{
    primary: '#0070f3'
  },
};

export default function App({ Component, pageProps }:AppProps):ReactElement {
  return( 
  <>
  <Head>
    <title>{name}</title>
    <meta name="description" content={"The OS project"}/>
  </Head>
  <GlobalStyle/>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}
 