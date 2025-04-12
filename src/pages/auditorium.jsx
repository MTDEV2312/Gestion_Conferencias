import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/nav";
import { useAuth } from '../context/authProvider.jsx';

const Auditorium = () => {
    const { auth } = useAuth();
    const [auditoriums, setAuditoriums] = useState([]);
    const [form, setForm] = useState({
        codigo: "",
        nombre: "",
        ubicacion: "",
        capacidad: "",
        descripcion: "",
    });

    const backendurl = import.meta.env.VITE_BACKENDURL;

    useEffect(() => {
        fetchAuditoriums();
    }, []);

    const fetchAuditoriums = async () => {
        try {
            const response = await axios.get(`${backendurl}/auditorium`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            setAuditoriums(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/';
            } else {
                console.error("Error fetching auditoriums:", error);
            }
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                codigo: form.codigo,
                nombre: form.nombre,
                ubicacion: form.ubicacion,
                capacidad: parseInt(form.capacidad, 10),
                descripcion: form.descripcion,
            };
            await axios.patch(`${backendurl}/auditorium/register`, payload, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            fetchAuditoriums();
            setForm({ codigo: "", nombre: "", ubicacion: "", capacidad: "", descripcion: "" });
        } catch (error) {
            console.error("Error creating auditorium:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendurl}/auditorium/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            fetchAuditoriums();
        } catch (error) {
            console.error("Error deleting auditorium:", error);
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
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h1 className="text-2xl font-bold">Gestión de Auditorios</h1>
                </div>

                {/* Auditorium List */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Lista de Auditorios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                        <div>ID</div>
                        <div>Nombre</div>
                        <div>Capacidad</div>
                        <div>Ubicación</div>
                        <div>Acciones</div>
                    </div>
                    {auditoriums.map((auditorium) => (
                        <div
                            key={auditorium.codigo}
                            className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center mt-2"
                        >
                            <div>{auditorium.codigo}</div>
                            <div>{auditorium.nombre}</div>
                            <div>{auditorium.capacidad}</div>
                            <div>{auditorium.ubicacion}</div>
                            <div>
                                <button
                                    onClick={() => handleDelete(auditorium.codigo)}
                                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add/Edit Auditorium */}
                <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Agregar/Editar Auditorio</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="codigo"
                            value={form.codigo}
                            onChange={handleChange}
                            placeholder="Código"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="ubicacion"
                            value={form.ubicacion}
                            onChange={handleChange}
                            placeholder="Ubicación"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="number"
                            name="capacidad"
                            value={form.capacidad}
                            onChange={handleChange}
                            placeholder="Capacidad"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <textarea
                            name="descripcion"
                            value={form.descripcion}
                            onChange={handleChange}
                            placeholder="Descripción"
                            className="bg-gray-800 text-white p-2 rounded col-span-1 md:col-span-2"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 col-span-1 md:col-span-2"
                        >
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auditorium;