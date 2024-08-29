// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, getToken, logout } = useAuth();

    if (getToken() === undefined) {
        logout();
        return <Navigate to="/" />;
    }

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
