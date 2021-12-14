import React from 'react'
import style from './Content.module.css'

const Project = ({ imageUrl, title, text }) => {
  return (
    <a className={style.projectBox} href="#s">
      <div>
        <img className={style.projIcon} src={imageUrl} alt="img" />
      </div>
      <div className={style.projTextConteiner}>
        <h3 className={style.projTextTitle}>{title}</h3>
        <p className={style.projText}>{text}</p>
      </div>
    </a>
  )
}

export default Project
