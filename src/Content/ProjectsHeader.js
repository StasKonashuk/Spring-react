import React from 'react'
import style from './Content.module.css'

const ProjectsHeader = () => {
  return (
    <div className={style.entryContainer}>
      <h1 className={style.entryTitle}>Projects</h1>
      <p className={style.entryContent}>
        From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design.
      </p>
    </div>
  )
}

export default ProjectsHeader
