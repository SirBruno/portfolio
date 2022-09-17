import '../styles/globals.scss'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bruno Pereira | Web developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
