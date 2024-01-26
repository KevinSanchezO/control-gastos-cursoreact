import Gasto from "./Gasto"

function ListadoGastos({
  gastos, 
  setGastoEditar, 
  eliminarGasto, 
  filtro, 
  gastosFiltrados}) {

  return (
    <div className="listado-gastos contenedor">
        {
          filtro ? 
            <h2>{gastosFiltrados.length ? 'Gastos':'No hay ningun gasto en esta categoría'}</h2>
          :
            <h2>{gastos.length ? 'Gastos':'No hay ningun gasto'}</h2>
        }
        
        {
          filtro ? 
          (
            gastosFiltrados.map(gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))
          ) 
          :
          (
            gastos.map(gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))
          )
        }
    </div>
  )
}

export default ListadoGastos