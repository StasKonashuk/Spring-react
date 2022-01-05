import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from '../redux/auth/auth-thunks-creators';
import style from './Header.module.css';

const LogOutLink = () => {
  const dispatch = useDispatch();

  const logoutCallBack = () => {
    dispatch(logOutThunk());
  };

  return (
    <button
      className={style.logOutButton}
      onClick={logoutCallBack}
      type="submit"
    >
      <NavLink style={{ color: 'white', padding: '3px' }} to="/login">
        LogOut
      </NavLink>
    </button>
  );
};

export default LogOutLink;
