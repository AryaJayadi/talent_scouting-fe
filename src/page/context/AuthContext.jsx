
import axios from 'axios';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

    useEffect(() => {
        async function checkAuth() {
            const token = Cookies.get('token');
            if (!token) {
                setIsAuthenticated(false);
                return;
            }
            try {
                await axios.get(`${process.env.REACT_APP_API}users/auth`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        }
        checkAuth();
    }, []);

    function login(token) {
        Cookies.set('token', token, { expires: 1/24 });
        setIsAuthenticated(true)
    }

    function logout() {
        Cookies.remove('token');
        setIsAuthenticated(false);
    }

    function getToken() {
        const token = Cookies.get('token');
        return token;
    }

    return <AuthContext.Provider value={{ isAuthenticated, getToken, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);