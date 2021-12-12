import React from 'react'
import style from './Content.module.css'

const ProjectsFooterItem = ({ title, text, link }) => {
  return (
    <div className={style.contentFooterTextContainer}>
      <h2 className={style.contentFooterTitle}>{title}</h2>
      <p className={style.contentFooterText}>{text}</p>
      <a className={style.contentFooterLink} href="#s">
        {link}
      </a>
    </div>
  )
}

export default ProjectsFooterItem
