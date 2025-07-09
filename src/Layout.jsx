// components/Layout.jsx
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setUser } from './features/user/authSlice';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

export const Layout = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  console.log(isAuthenticated,"is auth")
  return (
    <div className="min-h-screen bg-gray-50">

      <main >
        <Header/>
        <Navbar/>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};