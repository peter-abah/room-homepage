import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './main.module.css';

interface Slide {
  heading: string;
  body: string;
  images: {
    desktop: string;
    mobile: string;
  }
}

interface Props {
  data: Slide[];
}
function Main({ data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 48rem)');
    setIsMobile(mobileQuery.matches);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % data.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((current) => {
      return current > 0 ? current - 1 : data.length - 1
    });
  };

  const imageElems = data.map((slide, i) => {
    const imgSrc = isMobile ?
      slide.images.mobile :
      slide.images.desktop;
    
    const className = clsx(styles['img'], {
      [styles['img-active']]: i === currentSlide,
    });

    return (
      <img
        key={imgSrc}
        src={imgSrc}
        alt=''
        className={className}
        width={375}
        height={360}
      />
    );
  });
  
  const sectionElems = data.map((slide, i) => {
    const className = clsx(styles['section'], {
      [styles['section-active']]: i === currentSlide,
    });

    return (
      <section key={slide.heading} className={className}>
        <h2>{slide.heading}</h2>
        <p>{slide.body}</p>
        <a href='#'>
          <span className='pr-3'>SHOP NOW</span>
          <img src='/images/icon-arrow.svg' alt='' />
        </a>
      </section>
    )
  });

  return (
    <main className={styles.main}>
      <div className='relative'>
        {imageElems}
        <div className={styles['btns-wrapper']}>
          <button onClick={prevSlide}>
            <img src='/images/icon-angle-left.svg' />
            <span className='sr-only'>Previous Slide</span>
          </button>
          
          <button onClick={nextSlide}>
            <img src='images/icon-angle-right.svg' />
            <span className='sr-only'>Next Slide</span>
          </button>
        </div>
      </div>
      
      {sectionElems}
    </main>
  );
}

export default Main;