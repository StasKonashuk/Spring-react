import React, { useState } from 'react'
import style from './Header.module.css'
import classNames from 'classnames'

const HeaderItem = ({ title, submenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onArrowClickHandler = () => {
    setIsOpen(!isOpen)
  }
  const item = submenu.map(item => {
    if (item === 'View all Projects') {
      return (
        <li>
          <a href="#section" className={style.blueLink}>
            {item}
          </a>
        </li>
      )
    }
    if (item === 'Development Tools') {
      return <li className={style.uppercaseText}>{item}</li>
    }
    if (item === 'Spring Initializr') {
      return (
        <li>
          <a className={style.menuSublink} href="#s">
            {item}
            <svg
              className={style.externalLinkIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <polyline
                points="15 10.94 15 15 1 15 1 1 5.06 1"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <polyline
                points="8.93 1 15 1 15 7.07"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <line
                x1="15"
                y1="1"
                x2="8"
                y2="8"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <polyline
                points="15 10.94 15 15 1 15 1 1 5.06 1"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <polyline
                points="8.93 1 15 1 15 7.07"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <line
                x1="15"
                y1="1"
                x2="8"
                y2="8"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>
          </a>
        </li>
      )
    }
    return (
      <li>
        <a href="#s" className={style.menuSublink}>
          {item}
        </a>
      </li>
    )
  })
  return (
    <>
      {submenu.length !== 0 ? (
        <li className={classNames({ [style.active]: isOpen })}>
          <a href="#s" className={style.hasSubmenu}>
            {title}
          </a>
          <span className={style.menuArrow} onClick={onArrowClickHandler} />
          <ul className={style.menuSublist}>{item}</ul>
        </li>
      ) : (
        <li>
          <a href="#s" className={style.menuLink}>
            {title}
          </a>
        </li>
      )}
    </>
  )
}

export default HeaderItem
