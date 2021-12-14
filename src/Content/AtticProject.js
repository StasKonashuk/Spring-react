import React from 'react'
import style from './Content.module.css'

const AtticProject = ({ title, text }) => {
  return (
    <a className={style.atticProjBox} href="#s">
      <div className={style.atticProjectTextContainer}>
        <h3 className={style.atticProjectTitle}>{title}</h3>
        <p className={style.atticProjectText}>{text}</p>
      </div>
    </a>
  )
}

export default AtticProject
