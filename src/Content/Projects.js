import React from 'react'
import style from './Content.module.css'
import Project from './Project'

const Projects = ({ projects }) => {
  const project = [...projects].map(p => (
    <Project imageUrl={p.imageUrl} title={p.title} text={p.text} />
  ))
  return (
    <div className={style.projContent}>
      <div className={style.projectBoxContainer}>{project}</div>
    </div>
  )
}

export default Projects