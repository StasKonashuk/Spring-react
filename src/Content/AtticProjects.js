import React from 'react'
import AtticProject from './AtticProject'
import style from './Content.module.css'

const AtticProjects = ({ atticProjects }) => {
  const atticProject = [...atticProjects].map(p => (
    <AtticProject title={p.title} text={p.text} />
  ))
  return (
    <div className={style.atticProjContent}>
      <h2 className={style.atticProjTitle}>Projects in the Attic</h2>
      <div className={style.atticProjBoxContainer}>{atticProject}</div>
    </div>
  )
}

export default AtticProjects
