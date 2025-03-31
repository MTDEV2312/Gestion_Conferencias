const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-12 gap-4 min-h-screen bg-gray-900 text-white">
            <div className="col-span-1 row-span-1 md:row-span-12 bg-gray-800 p-4">
                {/* Sidebar */}
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
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-1 bg-gray-700 p-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Bienvenido, Carlos Rodriguez</h1>
                </div>
            </div>
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-2 bg-gray-700 p-4">
                {/* Resumen General */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">Resumen General</div>
                    <div className="bg-gray-800 p-4 rounded-lg">Auditorios</div>
                    <div className="bg-gray-800 p-4 rounded-lg">Reservas</div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-1 bg-gray-700 p-4">
                {/* Acciones Rápidas */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold">Acciones Rápidas</h2>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Agregar Conferencista</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Registrar Auditorio</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Nueva Reserva</button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-4 bg-gray-700 p-4">
                {/* Próximas Conferencias */}
                <div className="bg-gray-800 p-4 rounded-lg">Próximas Conferencias</div>
            </div>
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-3 bg-gray-700 p-4">
                {/* Estadísticas de Uso */}
                <div className="bg-gray-800 p-4 rounded-lg">Estadísticas de Uso</div>
            </div>
        </div>
    )
}

export default Dashboard