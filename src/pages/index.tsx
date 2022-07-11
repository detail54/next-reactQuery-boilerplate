import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>next react query boilerplate</title>
        <meta name='description' content='next react query boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='posts'>post</Link>
    </div>
  )
}

export default Home
