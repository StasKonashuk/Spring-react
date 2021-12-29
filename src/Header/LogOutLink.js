import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../redux/auth/auth-reducer';
import style from './Header.module.css';

const LogOutLink = () => {
  const dispatch = useDispatch();
  const logoutCallBack = () => dispatch(logOut());
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
