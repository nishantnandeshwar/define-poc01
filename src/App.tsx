import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const [isLogIn, setIsLogIn] = useState(() => localStorage.getItem('isLogin'));

  const navigate = useNavigate(); // is for changing routes.
  const location = useLocation(); // is for reading the current route info.


  useEffect(() => {
    console.log("***************** App ***************** ")
  }, [location.pathname, navigate])

  const onLogin = (value: any) => {
    localStorage.setItem('isLogin', value);
    setIsLogIn(value);
  };

  const onLogout = () => {
    localStorage.removeItem('isLogin');
    setIsLogIn(null);
  };

  return (
    <Outlet
      context={{ isLogIn, onLogin, onLogout }}
    // context={{ token, onLogin, onLogout }} 
    />
  );
}

