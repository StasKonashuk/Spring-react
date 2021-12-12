import React from 'react'
import style from './Header.module.css'

const Logo = () => {
  return (
    <a href="#s">
      <img
        className={style.springLogo}
        src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
        alt="Spring"
      />
    </a>
  )
}

export default Logo
