import { AppContext } from 'next/app'
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


