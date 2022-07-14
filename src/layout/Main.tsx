import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const Main: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const domain = `https://도메인명`
  const currentUrl = `${domain}/${router.asPath}`

  return (
    <>
      <Head>
        <link rel='canonical' href={currentUrl} />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta name='format-detection' content='telephone=no' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <title>__next react query boilerplate</title>
        <meta name='description' content='__next react query boilerplate' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:title' content='__next react query boilerplate' />
        <meta
          property='og:description'
          content='__next react query boilerplate'
        />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:locale' content='ko_kr' />
        {/* <meta
          property='og:image'
          content={`${domain}/opengraph.png?${(Math.random() * 7).toString(7)}`}
        /> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='__next react query boilerplate'
        />
        <title>next react query boilerplate</title>
        <meta name='description' content='next react query boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Main
