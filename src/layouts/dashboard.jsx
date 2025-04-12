import Nav from "../components/nav";
import { useAuth } from '../context/authProvider.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const { logout, auth } = useAuth();
    const [stats, setStats] = useState({
        totalAuditoriums: 0,
        totalSpeakers: 0,
        totalBookings: 0,
    });

    const backendurl = import.meta.env.VITE_BACKENDURL;

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [auditoriumsRes, speakersRes, bookingsRes] = await Promise.all([
                axios.get(`${backendurl}/auditorium`, {
                    headers: { Authorization: `Bearer ${auth.token}` },
                }),
                axios.get(`${backendurl}/speakers`, {
                    headers: { Authorization: `Bearer ${auth.token}` },
                }),
                axios.get(`${backendurl}/bookings`, {
                    headers: { Authorization: `Bearer ${auth.token}` },
                }),
            ]);

            setStats({
                totalAuditoriums: auditoriumsRes.data.length,
                totalSpeakers: speakersRes.data.length,
                totalBookings: bookingsRes.data.length,
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-12 gap-4 min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="col-span-1 row-span-12">
                <Nav />
            </div>

            {/* Main Content */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-12 p-4">
                {/* Header */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Bienvenido, Carlos Rodriguez</h1>
                    <button
                        onClick={logout}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Total Auditorios</h2>
                        <p className="text-2xl">{stats.totalAuditoriums}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Total Ponentes</h2>
                        <p className="text-2xl">{stats.totalSpeakers}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Total Reservas</h2>
                        <p className="text-2xl">{stats.totalBookings}</p>
                    </div>
                </div>

                {/* Resumen General */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-800 p-4 rounded-lg">Resumen General</div>
                    <div className="bg-gray-800 p-4 rounded-lg">Auditorios</div>
                    <div className="bg-gray-800 p-4 rounded-lg">Reservas</div>
                </div>

                {/* Acciones Rápidas */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold">Acciones Rápidas</h2>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Agregar Conferencista</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Registrar Auditorio</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Nueva Reserva</button>
                    </div>
                </div>

                {/* Próximas Conferencias */}
                <div className="bg-gray-800 p-4 rounded-lg mb-4">Próximas Conferencias</div>

                {/* Estadísticas de Uso */}
                <div className="bg-gray-800 p-4 rounded-lg">Estadísticas de Uso</div>
            </div>
        </div>
    );
};

export default Dashboard;