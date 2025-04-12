import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/nav";

const Conferences = () => {
    const [bookings, setBookings] = useState([]);
    const [form, setForm] = useState({
        codigo: "",
        descripcion: "",
        auditorio: "",
        conferencista: "",
    });

    const backendurl = import.meta.env.VITE_BACKENDURL;

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`${backendurl}/bookings`);
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
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
            await axios.post(`${backendurl}/bookings/register`, form);
            fetchBookings();
            setForm({ codigo: "", descripcion: "", auditorio: "", conferencista: "" });
        } catch (error) {
            console.error("Error creating booking:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendurl}/bookings/delete/${id}`);
            fetchBookings();
        } catch (error) {
            console.error("Error deleting booking:", error);
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
                    <h1 className="text-2xl font-bold">Gestión de Reservas</h1>
                </div>

                {/* Bookings List */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Lista de Reservas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                        <div>Código</div>
                        <div>Descripción</div>
                        <div>Auditorio</div>
                        <div>Conferencista</div>
                        <div>Acciones</div>
                    </div>
                    {bookings.map((booking) => (
                        <div
                            key={booking.codigo}
                            className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center mt-2"
                        >
                            <div>{booking.codigo}</div>
                            <div>{booking.descripcion}</div>
                            <div>{booking.auditorio}</div>
                            <div>{booking.conferencista}</div>
                            <div>
                                <button
                                    onClick={() => handleDelete(booking.codigo)}
                                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add/Edit Booking */}
                <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Agregar/Editar Reserva</h2>
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
                        <textarea
                            name="descripcion"
                            value={form.descripcion}
                            onChange={handleChange}
                            placeholder="Descripción"
                            className="bg-gray-800 text-white p-2 rounded col-span-1 md:col-span-2"
                            required
                        ></textarea>
                        <input
                            type="text"
                            name="auditorio"
                            value={form.auditorio}
                            onChange={handleChange}
                            placeholder="Auditorio"
                            className="bg-gray-800 text-white p-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="conferencista"
                            value={form.conferencista}
                            onChange={handleChange}
                            placeholder="Conferencista"
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

export default Conferences;