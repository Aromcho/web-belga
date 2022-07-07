import React from "react";
import { Global as GlobalStyling } from "@emotion/react";

import { Footer } from "components/footer";
import { Menu } from "components/menu";

import { LayoutWrapper, GlobalStyles } from "./layout.styles";

export interface LayoutProps {
  children?: React.ReactNode;
  menuTheme?: "transparent" | "light" | "dark";
  footerSmall?:boolean,
}

export const Layout = ({ children, menuTheme, footerSmall }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <GlobalStyling styles={GlobalStyles} />
      <Menu theme={menuTheme} />
      {children}
      <Footer small={footerSmall} />
    </LayoutWrapper>
  );
};
