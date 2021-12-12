import React, { useState } from 'react'
import Projects from './Projects'
import style from './Content.module.css'
import AtticProjects from './AtticProjects'

const ProjectsInfo = ({ projects, atticProjects }) => {
  const [value, setValue] = useState('')
  const filteredProjects = [...projects].filter(project => {
    return (
      project.title.toLowerCase().includes(value.toLowerCase()) ||
      project.text.toLowerCase().includes(value.toLowerCase())
    )
  })
  return (
    <div className={style.contentContainer}>
      <form className={style.projectsForm}>
        <input
          placeholder="Find your project"
          type="text"
          className={style.projInput}
          onChange={event => setValue(event.target.value)}
        />
      </form>
      <Projects projects={filteredProjects} />
      <AtticProjects atticProjects={atticProjects} />
    </div>
  )
}

export default ProjectsInfo
