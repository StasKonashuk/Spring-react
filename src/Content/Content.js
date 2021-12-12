import React from 'react'
import style from './Content.module.css'
import ProjectsFooter from './ProjectsFooter'
import ProjectsHeader from './ProjectsHeader'
import ProjectsInfo from './ProjectsInfo'

const Content = ({ projects, atticProjects }) => {
  return (
    <div className={style.hero}>
      <ProjectsHeader />
      <ProjectsInfo projects={projects} atticProjects={atticProjects} />
      <ProjectsFooter projectsFooterItems={projectsFooterItems} />
    </div>
  )
}

export default Content
