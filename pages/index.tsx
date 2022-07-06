import fs from 'fs';
import path from 'path';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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

      <main>
        <header>
          <h1>
            <Image
              src="/images/logo.svg"
              width={64}
              height={16}
              alt='Room logo'
            />
            <span className='sr-only'>Room</span>
          </h1>
          
          <nav>
            <ul>
              <li><a href='#'>home</a></li>
              <li><a href='#'>shop</a></li>
              <li><a href='#'>about</a></li>
              <li><a href='#'>contact</a></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Image
            src={main[0].images.mobile}
            alt=''
            width={375}
            height={360}
          />
          <div>
            <h2>{main[0].heading}</h2>
            <p>{main[0].body}</p>
            <a>SHOP NOW</a>
          </div>
        </main>
        
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
      </main>
    </div>
  )
}

export default Home
