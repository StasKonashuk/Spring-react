import React from 'react';
import style from './Header.module.css';

const TrainingItem = () => {
  return (
    <li>
      <a href="#s" className={style.menuLink}>
        Training
      </a>
    </li>
  );
};

export default TrainingItem;
