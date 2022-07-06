import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Room | Home</title>
        <meta name="description" content="Room homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello Room
        </h1>
      </main>
    </div>
  )
}

export default Home
