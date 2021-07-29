import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="icon-512.png" />
        <link rel="apple-touch-icon" href="icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work wi th Typescript, React, NextJs and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
