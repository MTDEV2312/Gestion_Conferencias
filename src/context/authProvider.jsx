import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth({ token });
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({});
    };
    
    return (
        <AuthContext.Provider value={
            {
                auth,
                setAuth,
                logout
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};

export default AuthContext