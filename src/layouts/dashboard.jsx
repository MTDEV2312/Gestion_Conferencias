import Nav from "../components/nav";

const Dashboard = () => {
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
                    <h1 className="text-2xl font-bold">Bienvenido, Carlos Rodriguez</h1>
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