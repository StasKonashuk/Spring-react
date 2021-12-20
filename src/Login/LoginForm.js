import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Login.module.css';
import { logIn } from '../redux/auth/auth-thunks-creators';
import { Navigate } from 'react-router-dom';
import { Formik } from 'formik';
import { getIsAuth, getErrorMsg } from '../redux/auth/auth-selectors';

const LoginForm = () => {
  const isAuth = useSelector(getIsAuth);
  const errorMsg = useSelector(getErrorMsg);
  const dispatch = useDispatch();

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={style.loginPageContainer}>
      <div className={style.loginPageContent}>
        <div className={style.logoContainer}>
          <img
            className={style.logo}
            src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
            alt="Spring"
          />
        </div>
        <div className={style.loginFormContainer}>
          <Formik
            initialValues={{ userName: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.userName) {
                errors.userName = 'Required username';
              }
              if (!values.password) {
                errors.password = 'Required password';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                dispatch(logIn(values));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit} className={style.loginForm}>
                <h1>Log In Here</h1>
                <input
                  type="text"
                  name="userName"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.loginFormInput}
                  value={values.userName}
                />
                {errors.userName && touched.userName && (
                  <div className={style.requiredError}>{errors.userName}</div>
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.loginFormInput}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className={style.requiredError}>{errors.password}</div>
                )}
                {errorMsg && (
                  <div className={style.loginFormError}>{errorMsg}</div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={style.loginFormButton}
                >
                  Log In
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className={style.footerLoginFormContainer}>
        <div>
          <div className={style.leftFooterLoginContent} />
          <div className={style.rightFooterLoginContent} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
