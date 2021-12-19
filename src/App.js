import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import NotFound from './common/NotFound';
import { useSelector } from 'react-redux';
import { getIsAuth } from './redux/auth/auth-selectors';

function App() {
  return (
    <Routes>
      <Route path="/spring-react" element={<Navigate to="/login" />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const Main = () => {
  const isAuth = useSelector(getIsAuth);

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
