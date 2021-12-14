import React, { useState } from 'react';
import style from './Header.module.css';
import WhySpringItem from './WhySpringItem';
import classNames from 'classnames';
import LearnItem from './LearnItem';
import ProjectsItem from './ProjectsItem';
import TrainingItem from './TrainingItem';
import SupportItem from './SupportItem';
import CommunityItem from './CommunityItem';

const HeaderItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onBurgerClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={classNames(style.headerBurger, {
          [style.headerBurgeractive]: isOpen
        })}
        onClick={onBurgerClickHandler}
      >
        <span />
      </div>
      <nav
        className={classNames(style.menuBody, {
          [style.menuBodyactive]: isOpen
        })}
      >
        <ul className={style.navItems}>
          <WhySpringItem />
          <LearnItem />
          <ProjectsItem />
          <TrainingItem />
          <SupportItem />
          <CommunityItem />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderItems;
