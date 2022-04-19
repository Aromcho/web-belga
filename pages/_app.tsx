import { AppContext } from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { getSnapshot } from 'mobx-keystone'
import NextNProgress from "nextjs-progressbar";

import { StoreProvider, initStore } from 'stores'
import { theme } from 'helpers/theme';

export default function App({ Component, pageProps, initialState }: any) {
  return (
    <StoreProvider snapshot={initialState}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color="#C62025"
          startPosition={0.2}
          height={6}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
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


