import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="bg-gray-800 h-full w-64 p-4 fixed top-0 left-0 shadow-lg">
            <div className="text-center text-xl font-bold mb-6">Gestión de Conferencias</div>
            <nav className="flex flex-col space-y-4">
                <Link to="/home" className="text-gray-300 hover:text-white">Inicio</Link>
                <Link to="/speakers" className="text-gray-300 hover:text-white">Conferencistas</Link>
                <Link to="/auditorium" className="text-gray-300 hover:text-white">Auditorios</Link>
                <Link to="/bookings" className="text-gray-300 hover:text-white">Reservas</Link>
            </nav>
        </div>
    );
};

export default Nav;