
const Conferences = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-12 gap-4">
            <div className="col-span-2 row-span-12">NAV</div>
            <div className="col-span-4 col-start-3">PAGINA</div>
            <div className="col-span-4 col-start-3 row-start-2">PRESENTACION</div>
            <div className="col-span-4 row-span-3 col-start-3 row-start-3">FILTRADO</div>
            <div className="col-span-4 row-span-4 col-start-3 row-start-6">CONFERENCIAS</div>
            <div className="col-span-4 row-span-3 col-start-3 row-start-10">DETALLES CONFERENCIAS</div>
        </div>
    )
}

export default Conferences