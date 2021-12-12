import React, { useState } from 'react'
import style from './Header.module.css'
import HeaderItem from './HeaderItem'
import classNames from 'classnames'

const HeaderItems = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const headerItem = [...navItems].map(n => (
    <HeaderItem title={n.title} submenu={n.submenu} />
  ))
  const onBurgerClickHandler = () => {
    setIsOpen(!isOpen)
  }
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
        <ul className={style.navItems}>{headerItem}</ul>
      </nav>
    </div>
  )
}

export default HeaderItems
