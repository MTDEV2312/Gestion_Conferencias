const Conferences = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-12 gap-4 min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="col-span-1 row-span-12 bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="text-center text-xl font-bold mb-6">Gestión de Conferencias</div>
                <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:text-white">Conferences</a>
                    <a href="#" className="text-gray-300 hover:text-white">Speakers</a>
                    <a href="#" className="text-gray-300 hover:text-white">Auditoriums</a>
                    <a href="#" className="text-gray-300 hover:text-white">Reservations</a>
                    <a href="#" className="text-gray-300 hover:text-white">Users</a>
                    <a href="#" className="text-gray-300 hover:text-white">Configuration</a>
                </nav>
            </div>

            {/* Header */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-1 bg-gray-700 p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Conferencias</h1>
                </div>
            </div>

            {/* Overview Section */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-2 bg-gray-700 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Total Conferencias</h2>
                        <p className="text-gray-300">15</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Conferencias Activas</h2>
                        <p className="text-gray-300">10</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Conferencias Finalizadas</h2>
                        <p className="text-gray-300">5</p>
                    </div>
                </div>
            </div>

            {/* Filtering Section */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-1 bg-gray-700 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Filtrar Conferencias</h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Buscar conferencia..."
                        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                        Buscar
                    </button>
                </div>
            </div>

            {/* Conferences Section */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-4 bg-gray-700 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Lista de Conferencias</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example Conference Card */}
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Conferencia 1</h3>
                        <p className="text-gray-300 mb-4">Descripción breve de la conferencia.</p>
                        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Ver Detalles
                        </button>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </div>

            {/* Conference Details Section */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-3 bg-gray-700 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Detalles de Conferencias</h2>
                <p className="text-gray-300">Selecciona una conferencia para ver más detalles sobre la misma.</p>
            </div>
        </div>
    );
};

export default Conferences;