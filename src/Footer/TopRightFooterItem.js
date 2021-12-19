import React from 'react';
import style from './Footer.module.css';

const TopRightFooterItem = () => {
  return (
    <div className={style.topRightFooterContainer}>
      <h2 className={style.topRightFooterTitle}>Get the Spring newsletter</h2>
      <form className={style.footerForm}>
        <div className={style.footerFormContainer}>
          <div className={style.footerInputContainer}>
            <input
              className={style.footerInput}
              name="Email"
              placeholder="Email Address"
              type="email"
            />
          </div>
        </div>
        <div className={style.footerCheckboxContainer}>
          <div className={style.footerCheckboxContent}>
            <input
              name="checkbox"
              type="checkbox"
              className={style.footerCheckbox}
            />
            <div className={style.checkboxInfo}>
              Yes, I would like to be contacted by The Spring Team and VMware
              for newsletters, promotions and events
            </div>
          </div>
        </div>
        <div className={style.subscribeButtonContainer}>
          <span className={style.subscribeButtonContent}>
            <button className={style.subscribeButton} type="submit">
              Subscribe
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default TopRightFooterItem;
