import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../redux/auth/auth-reducer';
import style from './Header.module.css';
import { useLogoutMutation } from '../api/authApi';

const LogOutLink = () => {
  const dispatch = useDispatch();

  const [logOutUser] = useLogoutMutation();

  const logoutCallBack = async () => {
    try {
      logOutUser();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
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
