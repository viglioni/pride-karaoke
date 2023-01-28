import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      <Head>
        <title>Karaoke Pride</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

/* MyApp.getInitialProps = async (appContext: AppContext) => {
 *   // calls page's `getInitialProps` and fills `appProps.pageProps`
 *   const appProps = await App.getInitialProps(appContext)
 *
 *   return { ...appProps }
 * } */

export default MyApp
