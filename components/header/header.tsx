import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './header.module.css';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  
  const headerClassName = clsx(styles.header, {
    [styles['menu-open']]: isMenuVisible,
    [styles['menu-close']]: !isMenuVisible
  });
  
  const btnIcon = isMenuVisible ?
    '/images/icon-close.svg' :
    '/images/icon-hamburger.svg';
  return (
    <header className={headerClassName}>
      <button className='md:hidden' onClick={toggleMenu}>
        <Image
          src={btnIcon}
          width={16}
          height={16}
          alt=''
        />
        <span className='sr-only'>Close Menu</span>
      </button>

      <h1>
        <Image
          src="/images/logo.svg"
          alt='Room logo'
          width={64}
          height={16}
          className={styles.logo}
        />
        <span className='sr-only'>Room</span>
      </h1>
      
      <nav className='ml-auto'>
        <ul className={styles['nav-list']}>
          <li><a href='#'>home</a></li>
          <li><a href='#'>shop</a></li>
          <li><a href='#'>about</a></li>
          <li><a href='#'>contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;