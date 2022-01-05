import React from 'react';
import ProjectsFooterItem from './ProjectsFooterItem';
import style from './Content.module.css';
import { useSelector } from 'react-redux';

const ProjectsFooter = () => {
  const footerProjects = useSelector(
    state => state.projects.projects.footerProjects
  );

  const footerItem = footerProjects.map(f => (
    <ProjectsFooterItem
      title={f.title}
      text={f.project_info}
      link={f.project_link}
      key={f.footer_project_id}
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
