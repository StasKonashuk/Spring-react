import React, { useState } from 'react';
import Projects from './Projects';
import style from './Content.module.css';
import AtticProjects from './AtticProjects';
import { useGetProjectsQuery } from '../api/springApi';

const ProjectsInfo = () => {
  const [value, setValue] = useState('');

  const { data = { projects: [] } } = useGetProjectsQuery();

  const searchHandler = val => {
    setValue(val);
  };

  const onBlurHandler = () => {
    setValue('');
  };

  const filterdProjects = data.projects.filter(proj => {
    return (
      proj.title.toLowerCase().includes(value.toLowerCase()) ||
      proj.text.toLowerCase().includes(value.toLowerCase())
    );
  });

  return (
    <div className={style.contentContainer}>
      <form className={style.projectsForm}>
        <input
          placeholder="Find your project"
          type="text"
          value={value}
          className={style.projInput}
          onChange={e => searchHandler(e.target.value)}
          onBlur={() => onBlurHandler()}
        />
      </form>
      <Projects projects={filterdProjects} />
      <AtticProjects />
    </div>
  );
};

export default ProjectsInfo;
