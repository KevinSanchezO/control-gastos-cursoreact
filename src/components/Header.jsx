import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

function Header(
  {presupuesto, 
    setGastos, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto, 
    gastos}
) {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? 
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
          :
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
          }
    </header>
  )
}

export default Header