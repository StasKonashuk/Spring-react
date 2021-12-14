import React from 'react';
import style from './Footer.module.css';

const TopLeftFooterWhySpringSubmenu = () => {
  return (
    <div className={style.footerColumn}>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            Why Spring
          </a>
        </strong>
      </p>
      <ul className={style.columnList}>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Microservices
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Reactive
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Event Driven
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Cloud
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Web Applications
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Serverless
          </a>
        </li>
        <li className={style.columnItem}>
          <a className={style.columnItemLink} href="#s">
            Batch
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopLeftFooterWhySpringSubmenu;
