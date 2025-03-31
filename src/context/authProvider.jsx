import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token)
        {
            setAuth({token})
        }
    }, [])
    
    return (
        <AuthContext.Provider value={
            {
                auth,
                setAuth              
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