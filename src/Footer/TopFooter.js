import React from 'react'
import TopLeftFooterItem from './TopLeftFooterItem'
import style from './Footer.module.css'
import TopRightFooterItem from './TopRightFooterItem'

const TopFooter = ({ footerLinks }) => {
  const topLeftFooterItem = [...footerLinks].map(i => (
    <TopLeftFooterItem title={i.titleLink} links={i.links} />
  ))
  return (
    <div className={style.topFooterContainer}>
      <div className={style.topLeftFooterContainer}>
        <div className={style.topLeftFooter}>{topLeftFooterItem}</div>
      </div>
      <TopRightFooterItem />
    </div>
  )
}

export default TopFooter
