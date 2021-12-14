import React, { useState } from 'react';
import style from './Header.module.css';
import classNames from 'classnames';

const WhySpringItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={classNames({ [style.active]: isOpen })}>
      <a href="#s" className={style.hasSubmenu}>
        Why Spring
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
            Microservices
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Reactive
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Event Driven
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Cloud
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Web Applications
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Serverless
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Batch
          </a>
        </li>
      </ul>
    </li>
  );
};

export default WhySpringItem;
