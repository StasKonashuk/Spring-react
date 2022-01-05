import React from 'react';
import style from './Content.module.css';
import ProjectsFooter from './ProjectsFooter';
import ProjectsHeader from './ProjectsHeader';
import ProjectsInfo from './ProjectsInfo';

const Content = () => {
  return (
    <div className={style.hero}>
      <ProjectsHeader />
      <ProjectsInfo />
      <ProjectsFooter />
    </div>
  );
};

export default Content;
