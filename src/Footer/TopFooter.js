import React from 'react';
import style from './Footer.module.css';
import TopRightFooterItem from './TopRightFooterItem';
import TopLeftFooterWhySpringSubmenu from './TopLeftFooterWhySpringSubmenu';
import TopLeftFooterLearnSubmenu from './TopLeftFooterLearnSubmenu';
import TopLeftFooterCommunitySubmenu from './TopLeftFooterCommunitySubmenu';
import TopLeftFooterProjectsSubmenu from './TopLeftFooterProjectsSubmenu';

const TopFooter = () => {
  return (
    <div className={style.topFooterContainer}>
      <div className={style.topLeftFooterContainer}>
        <div className={style.topLeftFooter}>
          <TopLeftFooterWhySpringSubmenu />
          <TopLeftFooterLearnSubmenu />
          <TopLeftFooterCommunitySubmenu />
          <TopLeftFooterProjectsSubmenu />
        </div>
      </div>
      <TopRightFooterItem />
    </div>
  );
};

export default TopFooter;
