const Nav = () => {
    return (
        <div className="bg-gray-800 h-full w-64 p-4 fixed top-0 left-0 shadow-lg">
            <div className="text-center text-xl font-bold mb-6">Gestión de Conferencias</div>
            <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
                <a href="#" className="text-gray-300 hover:text-white">Conferencistas</a>
                <a href="#" className="text-gray-300 hover:text-white">Auditorios</a>
                <a href="#" className="text-gray-300 hover:text-white">Reservas</a>
            </nav>
        </div>
    );
};

export default Nav;