
const Dashboard = () => {
    return (

        <div className="grid grid-cols-5 grid-rows-12 gap-4">
            <div className="col-span-2 row-span-12">NAV</div>
            <div className="col-span-3 col-start-3">Presentacion</div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-2">Resumen General</div>
            <div className="col-span-3 col-start-3 row-start-5">Acciones Rapidas</div>
            <div className="col-span-3 row-span-4 col-start-3 row-start-6">Proximas Conferencias</div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-10">Estadisticas de Uso</div>
        </div>

    )
}

export default Dashboard