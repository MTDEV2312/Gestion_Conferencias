// src/routes/PrivateRoutes.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider.jsx';

export const PrivateRoute = ({ children }) => {
    const { auth,} = useAuth();
    
    return auth?.token ? children : <Navigate to="/" />;
};