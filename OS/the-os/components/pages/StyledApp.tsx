
import { ThemeProvider } from 'styled-components';
import themes from "styles/themes.json";
import React, { FC, ReactElement, ReactNode } from "react"; // Import ReactNode

import GlobalStyle from 'styles/GlobalStyles';
import type { StyledAppProps } from 'types/components/pages/StyledApp';



const StyledApp : FC<StyledAppProps>=({children,theme=themes.default})=>(
  <>
  <GlobalStyle/>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
  </>

);
export default StyledApp;