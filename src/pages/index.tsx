import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>next react query boilerplate</title>
        <meta name='description' content='next react query boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='posts'>post</Link>
    </>
  )
}

export default Home
