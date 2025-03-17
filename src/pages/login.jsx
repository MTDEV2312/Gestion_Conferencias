
const Login = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-3">

                <div className="grid grid-cols-2 grid-rows-3 gap-3">
                    <div className="col-span-2">Icono</div>
                    <div className="col-span-2 row-start-2">Sistema de gestión de conferencias</div>
                    <div className="col-span-2 row-start-3">Por favor, introduzca sus credenciales para acceder al sistema</div>
                </div>

            </div>
            <div className="col-span-2 row-span-2 row-start-4">
                <form className="flex flex-col space-y-4">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su correo" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su contraseña" required />
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;