import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api';
import { setUser } from '../../features/user/authSlice';

export const Protected = ({ children }) => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getMe = async () => {
    try {
      const res = await api.get('/user/me');
      console.log(res, "responseeeeee");

      const data = res.data;
      console.log(data, "dataaaaaaa");
      if (data) {
        dispatch(setUser(data));
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    getMe();
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const token = localStorage.getItem("token");

  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!token) {
    return <Navigate to="/login"  replace />;
  }
  
  return children;
};