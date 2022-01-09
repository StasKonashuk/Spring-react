import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import NotFound from './common/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from './SignUp/SignUpForm';
import { useEffect } from 'react';
import { useRefreshMutation } from './api/authApi';
import { setAuth } from './redux/auth/auth-reducer';

function App() {
  return (
    <Routes>
      <Route path="/spring-react" element={<Navigate to="/login" />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const Main = () => {
  const dispatch = useDispatch();

  const [refreshUser, { isSuccess, isError }] = useRefreshMutation();

  useEffect(async () => {
    try {
      if (localStorage.getItem('access')) {
        const data = await refreshUser(localStorage.getItem('refresh'));
        if (data.data) {
          dispatch(setAuth(data.data.accessToken));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const isAuth = useSelector(state => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
