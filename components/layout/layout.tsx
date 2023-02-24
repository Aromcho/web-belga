import React from "react";
import dynamic from "next/dynamic";
import { Global as GlobalStyling } from "@emotion/react";

import { MenuProps } from "components/menu/menu";
import { FooterProps } from "components/footer/footer";
import { MailIconSend, TelIcon, WhatsappIcon } from "components/icons";

const Menu = dynamic<MenuProps>(() => import("components/menu").then((mod) => mod.Menu))
const Footer = dynamic<FooterProps>(() => import("components/footer").then((mod) => mod.Footer))

import { LayoutWrapper, GlobalStyles, HeroFooter } from "./layout.styles";
import Link from "next/link";

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
      <HeroFooter>
        <Link href="tel:+541152633393">
          <a className="head--footer-link phone">
            <TelIcon />
          </a>
        </Link>
        <a href="mailto:info@belga.com.ar" className="head--footer-link mail" target="_blank">
          <MailIconSend />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5491152633393&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta." className="head--footer-link wsp" target="_blank">
          <WhatsappIcon />
        </a>
      </HeroFooter>
    </LayoutWrapper>
  );
};
