// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoggedInRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default LoggedInRoute;