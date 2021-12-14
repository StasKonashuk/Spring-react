import React from 'react';
import Logo from './Logo';
import style from './Header.module.css';
import HeaderItems from './HeaderItems';

const Header = () => {
  return (
    <header className={style.nav}>
      <div className={style.navInnerContainer}>
        <Logo />
        <HeaderItems />
      </div>
    </header>
  );
};

export default Header;
