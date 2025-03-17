
const Auditorium = () => {
    return (

        <div className="grid grid-cols-6 grid-rows-12 gap-4">
            <div className="col-span-2 row-span-12">NAV</div>
            <div className="col-span-4 col-start-3">PAGINA</div>
            <div className="col-span-4 col-start-3 row-start-2">PRESENTACION</div>
            <div className="col-span-4 row-span-2 col-start-3 row-start-3">FILTRADO</div>
            <div className="col-span-4 row-span-4 col-start-3 row-start-5">AUDITORIOS</div>
            <div className="col-span-4 row-span-2 col-start-3 row-start-9">DETALLES</div>
            <div className="col-span-4 row-span-2 col-start-3 row-start-11">CALENDARIO</div>
        </div>

    )
}

export default Auditorium;