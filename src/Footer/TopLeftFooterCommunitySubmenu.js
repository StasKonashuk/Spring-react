import React from 'react';
import style from './Footer.module.css';

const TopLeftFooterCommunitySubmenu = () => {
  return (
    <div className={style.footerColumn}>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Community
          </a>
        </strong>
      </p>
      <ul className={style.columnList}>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Events
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Team
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopLeftFooterCommunitySubmenu;
