import clsx from 'clsx';
import { useState, useEffect } from 'react';
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
  
  /* useEffect(() => {
    alert([window.innerWidth, window.innerHeight]);
  }); */
  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % data.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((current) => {
      return current > 0 ? current - 1 : data.length - 1
    });
  };

  const imageElems = data.map(({images}, i) => {
    const className = clsx(styles['img'], {
      [styles['img-active']]: i === currentSlide,
    });

    return (
      <picture key={images.desktop} className={className}>
        <source media='(max-width: 760px)' srcset={images.mobile} />
        <source media='(min-width: 761px)' srcset={images.desktop} />
        <img src={images.desktop} alt={images.alt} className={className} />
      </picture>
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
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
        </a>
      </section>
    )
  });

  return (
    <main className={styles.main}>
      <div className='relative bg-red-500'>
        {imageElems}
        <div className={styles['btns-wrapper']}>
          <button onClick={prevSlide}>
            <img src='/images/icon-angle-left.svg' alt='' />
            <span className='sr-only'>Previous Slide</span>
          </button>
          
          <button onClick={nextSlide}>
            <img src='images/icon-angle-right.svg' alt='' />
            <span className='sr-only'>Next Slide</span>
          </button>
        </div>
      </div>
      
      {sectionElems}
    </main>
  );
}

export default Main;