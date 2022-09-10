import React from "react";
import dynamic from "next/dynamic";
import { Global as GlobalStyling } from "@emotion/react";

import { MenuProps } from "components/menu/menu";
import { FooterProps } from "components/footer/footer";

const Menu = dynamic<MenuProps>(() => import("components/menu").then((mod) => mod.Menu))
const Footer = dynamic<FooterProps>(() => import("components/footer").then((mod) => mod.Footer))

import { LayoutWrapper, GlobalStyles } from "./layout.styles";

export interface LayoutProps {
  children?: React.ReactNode;
  menuTheme?: "transparent" | "light" | "dark";
  footerSmall?:boolean,
  backToTopFooter?:boolean,
}

export const Layout = ({ children, menuTheme, footerSmall }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <GlobalStyling styles={GlobalStyles} />
      <Menu theme={menuTheme} />
      {children}
      <Footer small={footerSmall} id="contacto" backToTopFooter/>
    </LayoutWrapper>
  );
};
