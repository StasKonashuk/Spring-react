import React, { useState } from 'react';
import style from './Header.module.css';
import classNames from 'classnames';

const ProjectsItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={classNames({ [style.active]: isOpen })}>
      <a href="#s" className={style.hasSubmenu}>
        Projects
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
            Spring Boot
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Framework
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Cloud
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Cloud Data Flow
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Data
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Integration
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Batch
          </a>
        </li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Security
          </a>
        </li>
        <li>
          <a href="#s" className={style.blueLink}>
            View all Project
          </a>
        </li>
        <li className={style.uppercaseText}>Development Tools</li>
        <li>
          <a href="#s" className={style.menuSublink}>
            Spring Tools 4
          </a>
        </li>
        <li>
          <a className={style.menuSublink} href="#s">
            Spring Initializr
            <svg
              className={style.externalLinkIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <polyline
                points="15 10.94 15 15 1 15 1 1 5.06 1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                points="8.93 1 15 1 15 7.07"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="15"
                y1="1"
                x2="8"
                y2="8"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                points="15 10.94 15 15 1 15 1 1 5.06 1"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                points="8.93 1 15 1 15 7.07"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="15"
                y1="1"
                x2="8"
                y2="8"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectsItem;
