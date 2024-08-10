import { AppContext } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from '@emotion/react';
import { getSnapshot } from 'mobx-keystone'
import NextNProgress from "nextjs-progressbar";
import { StoreProvider, initStore } from 'stores'
import { theme } from 'helpers/theme';

export default function App({ Component, pageProps, initialState }: any) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-KBVCVZE3RH" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBVCVZE3RH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id='google-tag-manager'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KM8CG8GC');
          `,
        }}
      />
    <StoreProvider snapshot={initialState}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color="#C62025"
          startPosition={0.2}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const store = initStore()

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { initialState: getSnapshot(store), pageProps }
}


