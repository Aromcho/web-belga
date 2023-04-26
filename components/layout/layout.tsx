import React from "react";
import dynamic from "next/dynamic";
import Head from 'next/head';
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

      <Head>
        {/*OpenGraph metadata*/}
        <meta key="og:type" property="og:type" content="Website" />
        <meta key="og:title" property="og:title" content="Belga Inmobiliaria" />
        <meta
          key="og:description"
          property="og:description"
          content="Nuestra misión: Ofrecer la mas alta calidad de servicios inmobiliarios, buscando continuamente mejorar y ampliar la gama de servicios ofrecidos con el fin de satisfacer las necesidades de nuestros clientes actuales y futuros"
        />
        <meta key="og:url" property="og:url" content="https://www.belga.com.ar/" />
        <meta key="og:type" property="og:type" content="Website" />
        <meta key="og:site_name" property="og:site_name" content="Belga Inmobiliaria" />
        <meta
          property="og:image"
          content="https://belga.com.ar/images/og_image.png"
          key="og:image"
        />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#c62025"
        />
        <meta name="msapplication-TileColor" content="#f1b332" />
        <meta name="theme-color" content="#f1b332" />

        {/* Google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyling styles={GlobalStyles} />
      <Menu theme={menuTheme} />
      {children}
      <Footer small={footerSmall} id="contacto" backToTopFooter/>
      <HeroFooter id="menuFooter">
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
