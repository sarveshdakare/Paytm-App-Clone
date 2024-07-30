// // authUtils.js
// export const isAuthenticated = () => {
//     const token = localStorage.getItem('token');
//     // Implement additional token validation logic here if necessary
//     return !!token; // Returns true if token exists, otherwise false
// };

// import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = localStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
