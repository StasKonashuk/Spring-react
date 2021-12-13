import React from 'react';
import style from './Footer.module.css';

const TopLeftFooterLearnSubmenu = () => {
  return (
    <div className={style.footerColumn}>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Learn
          </a>
        </strong>
      </p>
      <ul className={style.columnList}>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Quickstart
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Guides
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopLeftFooterLearnSubmenu;
