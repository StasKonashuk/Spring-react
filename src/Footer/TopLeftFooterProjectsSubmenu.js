import React from 'react';
import style from './Footer.module.css';

const TopLeftFooterProjectsSubmenu = () => {
  return (
    <div className={style.footerColumn}>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Projects
          </a>
        </strong>
      </p>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Training
          </a>
        </strong>
      </p>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Support
          </a>
        </strong>
      </p>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Thank You
          </a>
        </strong>
      </p>
    </div>
  );
};

export default TopLeftFooterProjectsSubmenu;
