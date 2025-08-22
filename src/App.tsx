import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  // const [token, setToken] = useState(() => localStorage.getItem('token'));

  const navigate = useNavigate(); // is for changing routes.
  const location = useLocation(); // is for reading the current route info.


  useEffect(() => {
    console.log("***************** App ***************** ")
  }, [location.pathname, navigate])

  // const onLogin = (tokenValue: any) => {
  //   localStorage.setItem('token', tokenValue);
  //   setToken(tokenValue);
  // };

  // const onLogout = () => {
  //   localStorage.removeItem('token');
  //   setToken(null);
  // };

  // Redirect logic: if logged in and on '/', go to '/dashboard'
  // useEffect(() => {
  //   if (token && location.pathname === '/') {
  //     navigate('/dashboard', { replace: true });
  //   }
  // }, [token, location.pathname, navigate]);

  // Protect /dashboard: if not logged in, go to '/'
  // useEffect(() => {
  //   if (!token && (location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/membership-directory'))) {
  //     navigate('/', { replace: true });
  //   }
  // }, [token, location.pathname, navigate]);

  return (
    <Outlet
      context={{}}
    // context={{ token, onLogin, onLogout }} 
    />
  );
}

