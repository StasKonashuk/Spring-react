import React, { useEffect, useState } from 'react';
import style from './SignUp.module.css';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRefresh, signUpFail, signUp } from '../redux/auth/auth-reducer';
import { useSignUpMutation } from '../api/authApi';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const succesMsg = useSelector(state => state.auth.message);

  const [signUpUser] = useSignUpMutation();

  useEffect(() => {
    dispatch(signUpRefresh());
  }, []);

  const signUpErrors = useSelector(state => state.auth.signUpErrors);

  return (
    <div className={style.signUpPageContainer}>
      <div className={style.signUpPageContent}>
        <div className={style.logoContainer}>
          <img
            className={style.logo}
            src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
            alt="Spring"
          />
        </div>
        <div className={style.signUpFormContainer}>
          {succesMsg ? (
            <div className={style.successSignUpMessage}>{succesMsg}</div>
          ) : (
            <Formik
              initialValues={{
                userName: '',
                password: '',
                repeatPassword: '',
                firstName: '',
                lastName: '',
                age: ''
              }}
              validate={values => {
                const errors = {};
                if (!values.userName) {
                  errors.userName = 'Required username';
                }
                if (!values.password) {
                  errors.password = 'Required password';
                }
                if (!values.repeatPassword) {
                  errors.repeatPassword = 'Required password';
                }
                if (!values.firstName) {
                  errors.firstName = 'Required firstName';
                }
                if (!values.lastName) {
                  errors.lastName = 'Required lastName';
                }
                if (!values.age) {
                  errors.age = 'Required age';
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const data = await signUpUser(values);
                  if (data.data) {
                    dispatch(signUp(data.data.message));
                  }
                  if (data.error) {
                    if (data.error.status === 400) {
                      dispatch(
                        signUpFail({
                          signUpErrors: data.error.data.error
                        })
                      );
                    }
                    if (data.error.status === 401) {
                      dispatch(signUp(data.error.data.message));
                    }
                  }
                  setSubmitting(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit} className={style.signUpForm}>
                  <h1>Sign Up Here</h1>
                  <p className={style.inputTitle}>Username:</p>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName ? (
                    <div className={style.requiredError}>{errors.userName}</div>
                  ) : null}
                  {signUpErrors.userNameError &&
                    signUpErrors.userNameError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.userNameError}
                      </div>
                    )}
                  <p className={style.inputTitle}>Password:</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className={style.requiredError}>{errors.password}</div>
                  )}
                  {signUpErrors.passwordError &&
                    signUpErrors.passwordError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.passwordError}
                      </div>
                    )}
                  <p className={style.inputTitle}>Repeat password:</p>
                  <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.repeatPassword}
                  />
                  {errors.repeatPassword && touched.repeatPassword && (
                    <div className={style.requiredError}>
                      {errors.repeatPassword}
                    </div>
                  )}
                  {signUpErrors.repeatPasswordError &&
                    signUpErrors.repeatPasswordError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.repeatPasswordError}
                      </div>
                    )}
                  <p className={style.inputTitle}>First name:</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className={style.requiredError}>
                      {errors.firstName}
                    </div>
                  )}
                  {signUpErrors.firstNameError &&
                    signUpErrors.firstNameError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.firstNameError}
                      </div>
                    )}
                  <p className={style.inputTitle}>Last name:</p>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName && (
                    <div className={style.requiredError}>{errors.lastName}</div>
                  )}
                  {signUpErrors.lastNameError &&
                    signUpErrors.lastNameError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.lastNameError}
                      </div>
                    )}
                  <p className={style.inputTitle}>Age:</p>
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.signUpFormInput}
                    value={values.age}
                  />
                  {errors.age && touched.age && (
                    <div className={style.requiredError}>{errors.age}</div>
                  )}
                  {signUpErrors.ageError &&
                    signUpErrors.ageError.length !== 0 && (
                      <div className={style.signUpFormError}>
                        {signUpErrors.ageError}
                      </div>
                    )}
                  <button
                    type="submit"
                    disabled={isSubmitting || !dirty || !isValid}
                    className={style.signUpFormButton}
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </Formik>
          )}
          <NavLink className={style.loginLink} to="/login">
            Log In
          </NavLink>
        </div>
      </div>
      <div className={style.footerSignUpFormContainer}>
        <div>
          <div className={style.leftFooterSignUpContent} />
          <div className={style.rightFooterSignUpContent} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
