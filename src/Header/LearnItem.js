import React, { useState } from 'react';
import style from './Header.module.css';
import classNames from 'classnames';

const LearnItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={classNames({ [style.active]: isOpen })}>
      <a href="#s" className={style.hasSubmenu}>
        Learn
      </a>
      <span className={style.menuArrow} onClick={onArrowClickHandler} />
      <ul className={style.menuSublist}>
        <li>
          <a href="#s" className={style.menuSublink}>
            Overview
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Quickstart
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Guides
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Blog
          </a>
        </li>
      </ul>
    </li>
  );
};

export default LearnItem;
