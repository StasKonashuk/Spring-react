import React, { useEffect } from 'react';
import style from './Content.module.css';
import Project from './Project';

const Projects = ({ projects }) => {
  const project = projects.map(p => (
    <Project
      imageUrl={p.image_url}
      title={p.title}
      text={p.project_info}
      key={p.project_id}
    />
  ));
  return (
    <div className={style.projContent}>
      <div className={style.projectBoxContainer}>{project}</div>
    </div>
  );
};

export default Projects;
