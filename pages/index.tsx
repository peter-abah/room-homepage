import fs from 'fs';
import path from 'path';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header';
import Main from '../components/main';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  
  return {
    props: { data }
  }
}

const Home: NextPage = ({ data }) => {
  const { about, main } = data;
  return (
    <div>
      <Head>
        <title>Room | Home</title>
        <meta name="description" content="Room homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='relative'>
        <Header />
        <Main data={main} />
      </div>
        
      <section>
        <Image
          src={about.imgDark}
          height={266}
          width={440}
          alt="One of our products. A coffee table with a pair of lounge chairs"
        />

        <div>
          <h3>{about.heading}</h3>
          <p>{about.body}</p>
        </div>

        <Image
          src={about.imgLight}
          height={266}
          width={440}
          alt="One of our products.A white chair"
        />
      </section>
    </div>
  )
}

export default Home
