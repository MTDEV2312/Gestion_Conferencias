import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/nav";
import { useAuth } from '../context/authProvider.jsx';

const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        cedula: "",
        genero: "",
        ciudad: "",
        direccion: "",
        fecha_nacimiento: "",
        telefono: "",
        email: "",
        empresa: "",
    });

    const backendurl = import.meta.env.VITE_BACKENDURL;
    const { auth } = useAuth();

    useEffect(() => {
        fetchSpeakers();
    }, []);

    const fetchSpeakers = async () => {
        try {
            const response = await axios.get(`${backendurl}/speakers`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            setSpeakers(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/';
            } else {
                console.error("Error fetching speakers:", error);
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
                nombre: form.nombre,
                apellido: form.apellido,
                cedula: form.cedula,
                genero: form.genero,
                ciudad: form.ciudad,
                direccion: form.direccion,
                fecha_nacimiento: form.fecha_nacimiento,
                telefono: form.telefono,
                email: form.email,
                empresa: form.empresa,
            };
            await axios.post(`${backendurl}/speakers/register`, payload, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            fetchSpeakers();
            setForm({
                nombre: "",
                apellido: "",
                cedula: "",
                genero: "",
                ciudad: "",
                direccion: "",
                fecha_nacimiento: "",
                telefono: "",
                email: "",
                empresa: "",
            });
        } catch (error) {
            console.error("Error creating speaker:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendurl}/speakers/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            fetchSpeakers();
        } catch (error) {
            console.error("Error deleting speaker:", error);
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
                    <h1 className="text-2xl font-bold">Gestión de Ponentes</h1>
                </div>

                {/* Speakers List */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Lista de Ponentes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                        <div>Cédula</div>
                        <div>Nombre</div>
                        <div>Email</div>
                        <div>Teléfono</div>
                        <div>Acciones</div>
                    </div>
                    {speakers.map((speaker) => (
                        <div
                            key={speaker.cedula}
                            className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center mt-2"
                        >
                            <div>{speaker.cedula}</div>
                            <div>{`${speaker.nombre} ${speaker.apellido}`}</div>
                            <div>{speaker.email}</div>
                            <div>{speaker.telefono}</div>
                            <div>
                                <button
                                    onClick={() => handleDelete(speaker.cedula)}
                                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add/Edit Speaker */}
                <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Agregar/Editar Ponente</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            name="apellido"
                            value={form.apellido}
                            onChange={handleChange}
                            placeholder="Apellido"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="cedula"
                            value={form.cedula}
                            onChange={handleChange}
                            placeholder="Cédula"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <select
                            name="genero"
                            value={form.genero}
                            onChange={handleChange}
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        >
                            <option value="">Seleccione Género</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                        <input
                            type="text"
                            name="ciudad"
                            value={form.ciudad}
                            onChange={handleChange}
                            placeholder="Ciudad"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="direccion"
                            value={form.direccion}
                            onChange={handleChange}
                            placeholder="Dirección"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="date"
                            name="fecha_nacimiento"
                            value={form.fecha_nacimiento}
                            onChange={handleChange}
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="empresa"
                            value={form.empresa}
                            onChange={handleChange}
                            placeholder="Empresa"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
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

export default Speakers;