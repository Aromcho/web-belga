import NextDocument, { Html, Head as DocumentHead, Main, NextScript } from "next/document";
import Head from 'next/head';
import Script from 'next/script';
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <DocumentHead />
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
        <body>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-KBVCVZE3RH" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-KBVCVZE3RH');
            `}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
