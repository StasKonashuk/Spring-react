import React from 'react';
import Logo from './Logo';
import style from './Header.module.css';
import HeaderItems from './HeaderItems';
import LogOutLink from './LogOutLink';

const Header = () => {
  return (
    <header className={style.nav}>
      <div className={style.navInnerContainer}>
        <Logo />
        <LogOutLink />
        <HeaderItems />
      </div>
    </header>
  );
};

export default Header;
