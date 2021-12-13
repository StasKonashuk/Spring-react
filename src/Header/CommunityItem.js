import React, { useState } from 'react';
import style from './Header.module.css';
import classNames from 'classnames';

const CommunityItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={classNames({ [style.active]: isOpen })}>
      <a href="#s" className={style.hasSubmenu}>
        Community
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
            Events
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Team
          </a>
        </li>
      </ul>
    </li>
  );
};

export default CommunityItem;
