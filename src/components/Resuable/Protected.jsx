import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../features/user/authSlice';

// get token from local storage
// user/me -fetchdata
// store it in global store
  const token= localStorage.getItem("token");
  
export const Protected = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
  const getMe = async () => {
    const res= await axios.get(
      "https://ecom-backend-4heh.onrender.com/api/v1/user/me",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        console.log(res, "responseeeeee");

        const data=res.data;
        console.log(data, "dataaaaaaa");
        if (data) {
          dispatch(setUser(data));
          
        } else {
          console.log("No user data found");
        }
    }
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    getMe();
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);

//   const { isAuthenticated} = useSelector(state => state.auth);
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