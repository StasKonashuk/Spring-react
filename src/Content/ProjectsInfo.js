import React, { useEffect, useState } from 'react'
import Projects from './Projects'
import style from './Content.module.css'
import AtticProjects from './AtticProjects'
import data from '../data/data'

const ProjectsInfo = () => {
  const [value, setValue] = useState('')
  const [filteredProjects, setFilteredProjects] = useState([])
  useEffect(() => {
    setFilteredProjects(
      data.projects.filter(project => {
        return (
          project.title.toLowerCase().includes(value.toLowerCase()) ||
          project.text.toLowerCase().includes(value.toLowerCase())
        )
      })
    )
  }, [value])
  return (
    <div className={style.contentContainer}>
      <form className={style.projectsForm}>
        <input
          placeholder="Find your project"
          type="text"
          className={style.projInput}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Projects projects={filteredProjects} />
      <AtticProjects />
    </div>
  )
}

export default ProjectsInfo
