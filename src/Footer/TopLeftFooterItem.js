import React from 'react'
import style from './Footer.module.css'
import TopLeftFooterItemSubmenu from './TopLeftFooterItemSubmenu'

const TopLeftFooterItem = ({ links, title }) => {
  const topFooterItemSubmenu = [...links].map(s => (
    <TopLeftFooterItemSubmenu link={s} title={title} />
  ))
  return (
    <div className={style.footerColumn}>
      <p className={style.columnTitle}>
        <strong>
          <a className={style.columnLink} href="#s">
            {title}
          </a>
        </strong>
      </p>
      {topFooterItemSubmenu}
    </div>
  )
}

export default TopLeftFooterItem
