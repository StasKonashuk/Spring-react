import React, { useState } from 'react';
import Projects from './Projects';
import style from './Content.module.css';
import AtticProjects from './AtticProjects';
import { useDispatch, useSelector, connect } from 'react-redux';
import { actions } from '../redux/projects/projects-actions-creators';

const ProjectsInfo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const searchHandler = val => {
    setValue(val);
    dispatch(actions.searchProject(val));
  };

  const filterdProjects = useSelector(state =>
    state.projects.projects.filter(proj => {
      return (
        proj.title.toLowerCase().includes(state.projects.value.toLowerCase()) ||
        proj.text.toLowerCase().includes(state.projects.value.toLowerCase())
      );
    })
  );

  return (
    <div className={style.contentContainer}>
      <form className={style.projectsForm}>
        <input
          placeholder="Find your project"
          type="text"
          value={value}
          className={style.projInput}
          onChange={e => searchHandler(e.target.value)}
        />
      </form>
      <Projects projects={filterdProjects} />
      <AtticProjects />
    </div>
  );
};

export default ProjectsInfo;
