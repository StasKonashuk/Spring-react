import React from 'react';
import ProjectsFooterItem from './ProjectsFooterItem';
import style from './Content.module.css';
import { getFooterProjectsItem } from '../redux/projects/projects-selectors';
import { useSelector } from 'react-redux';

const ProjectsFooter = () => {
  const projectsFooterItems = useSelector(getFooterProjectsItem);
  const footerItem = projectsFooterItems.map(f => (
    <ProjectsFooterItem
      title={f.title}
      text={f.text}
      link={f.linkText}
      key={f.id}
    />
  ));
  return (
    <div className={style.contentFooter}>
      <div className={style.contentFooterContainer}>
        <div className={style.greenCircle} />
        <img
          className={style.circleGrid}
          src="https://spring.io/images/footer-circles-dc4b03d4edc1f3b7b42a45bdcce411c8.svg"
          alt=""
        />
        {footerItem}
      </div>
    </div>
  );
};

export default ProjectsFooter;
