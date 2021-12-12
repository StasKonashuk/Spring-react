import React from 'react'
import style from './Footer.module.css'

const TopLeftFooterItemSubmenu = ({ title, link }) => {
  if (title === 'Projects') {
    return (
      <div className={style.footerColumn}>
        <p>
          <strong>
            <a className={style.columnLink} href="#s">
              {link}
            </a>
          </strong>
        </p>
      </div>
    )
  }
  return (
    <ul className={style.columnList}>
      <li className={style.columnItem}>
        <a className={style.columnItemLink} href="#s">
          {link}
        </a>
      </li>
    </ul>
  )
}

export default TopLeftFooterItemSubmenu
