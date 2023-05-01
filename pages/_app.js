import '../styles/globals.scss'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Bruno Silva | Desenvolvedor Web | Mogi Mirim, SP</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
