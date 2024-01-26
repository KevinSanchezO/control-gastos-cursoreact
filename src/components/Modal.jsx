import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import cerrarbtn from '../img/cerrar.svg'

function Modal({
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar,
  setGastoEditar}) {

  const[nombre, setNombre] = useState('');
  const[cantidad, setCantidad] = useState('');
  const[categoria, setCategoria] = useState('');
  const[mensaje, setMensaje] = useState('');
  const[fecha, setFecha] = useState('');
  const[id, setId] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }
  }, []);
  

  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      
      setTimeout(() => {
        setMensaje('')
      }, 2000);
      return;
    }

    guardarGasto({nombre, cantidad, categoria, id, fecha})
  }
    
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={cerrarbtn}
                alt='cerrar modal'
                onClick={ocultarModal}/>
        </div>

        <form 
          className={`formulario ${animarModal ? 'animar':'cerrar'}`}
          onSubmit={handleSubmit}
        >
            <legend>{gastoEditar.nombre ? 'Editar Gasto': 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className='campo'>
              <label htmlFor='nombre'>Nombre Gasto</label>

              <input
                id='nombre'
                type='text'
                placeholder='Añade el nombre del gasto'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div className='campo'>
              <label htmlFor='cantidad'>Cantidad</label>

              <input
                id='cantidad'
                type='number'
                placeholder='Añade la cantidad del gasto'
                value={cantidad}
                onChange={e => setCantidad(Number(e.target.value))}
              />
            </div>

            <div className='campo'>
              <label htmlFor='categoria'>Categoría</label>

              <select
                id='categoria'
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
              >
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="subscripcion">Subscripcion</option>
              </select>
            </div>

            <input
              type='submit'
              value={gastoEditar.nombre ? 'Guardar cambios': 'Añadir Gasto'}
            />
        </form>
    </div>
  )
}

export default Modal