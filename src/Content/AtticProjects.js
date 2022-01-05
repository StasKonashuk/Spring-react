import React from 'react';
import { useSelector } from 'react-redux';
import AtticProject from './AtticProject';
import style from './Content.module.css';

const AtticProjects = () => {
  const atticProjects = useSelector(
    state => state.projects.projects.atticProjects
  );

  const atticProject = atticProjects.map(p => (
    <AtticProject
      title={p.title}
      text={p.project_info}
      key={p.attic_project_id}
    />
  ));

  return (
    <div className={style.atticProjContent}>
      <h2 className={style.atticProjTitle}>Projects in the Attic</h2>
      <div className={style.atticProjBoxContainer}>{atticProject}</div>
    </div>
  );
};

export default AtticProjects;
