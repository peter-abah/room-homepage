import fs from 'fs';
import path from 'path';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header';
import Main from '../components/main';
import About from '../components/about';

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
        
      <About data={about} />
    </div>
  )
}

export default Home
