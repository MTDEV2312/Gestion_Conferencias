import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authProvider.jsx';
import { useContext, useState } from 'react';
import axios from 'axios';


const Login = () => {
    const {setAuth} = useContext(AuthContext)
    const backendurl = import.meta.env.VITE_BACKENDURL;
    const navigate = useNavigate();

    const [form,setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = `${backendurl}/login`
            const response = await axios.post(url,form)
            localStorage.setItem('token',response.data.token)
            setAuth({token: response.data.token})
            navigate('/home')
        } catch (error) {
            setForm({})
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-900">
            <div className="w-full max-w-md mx-auto p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl transform transition-all">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Sistema de Gestión de Conferencias</h2>
                    <p className="text-gray-300 text-lg">Por favor, introduzca sus credenciales para acceder al sistema</p>
                </div>

                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
                        <div className="mt-1">
                            <input 
                                type="email" 
                                id="email"
                                name='email'
                                value={form.email || ''}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white" 
                                placeholder="Ingrese su correo" 
                                required 
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
                        <div className="mt-1">
                            <input 
                                type="password" 
                                id="password" 
                                name='password'
                                value={form.password || ''}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white" 
                                placeholder="Ingrese su contraseña" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;