const Auditorium = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-12 gap-4 min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="col-span-2 row-span-12 bg-gray-800 p-4">
                <div className="flex flex-col space-y-4">
                    <div className="text-center text-xl font-bold">Gestión de Conferencias</div>
                    <nav className="flex flex-col space-y-2">
                        <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
                        <a href="#" className="text-gray-300 hover:text-white">Conferencistas</a>
                        <a href="#" className="text-gray-300 hover:text-white">Auditorios</a>
                        <a href="#" className="text-gray-300 hover:text-white">Reservas</a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-4 col-start-3 row-span-12 p-4">
                {/* Header */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h1 className="text-2xl font-bold">Gestión de Auditorios</h1>
                </div>

                {/* Search and Filters */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Buscar auditorios..."
                        className="bg-gray-800 text-white p-2 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Capacidad mínima"
                        className="bg-gray-800 text-white p-2 rounded"
                    />
                    <select className="bg-gray-800 text-white p-2 rounded">
                        <option value="all">Todos</option>
                        <option value="available">Disponibles</option>
                        <option value="occupied">Ocupados</option>
                    </select>
                </div>

                {/* Auditoriums List */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Lista de Auditorios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                        <div>ID</div>
                        <div>Nombre</div>
                        <div>Capacidad</div>
                        <div>Ubicación</div>
                        <div>Estado</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center mt-2">
                        <div>001</div>
                        <div>Main Conference Hall</div>
                        <div>500</div>
                        <div>Building A, Floor 2</div>
                        <div>Disponible</div>
                    </div>
                    {/* Agrega más filas aquí según sea necesario */}
                </div>

                {/* Auditorium Details */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Detalles del Auditorio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Capacidad</h3>
                            <p>500 personas</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Ubicación</h3>
                            <p>Building A, Floor 2</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Estado</h3>
                            <p>Disponible</p>
                        </div>
                    </div>
                </div>

                {/* Scheduled Conferences */}
                <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Conferencias Programadas</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">Annual Tech Summit</h3>
                                <p>15 de mayo de 2023 | 09:00 - 17:00</p>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
                                Ver
                            </button>
                        </div>
                        {/* Agrega más conferencias aquí según sea necesario */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auditorium;