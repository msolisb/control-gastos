import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import cerrarModal from '../img/cerrar.svg'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombreGasto, setNombreGasto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const [mensaje, setMensaje] = useState('')

  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombreGasto(gastoEditar.nombreGasto)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])

  const handleCerrarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombreGasto, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son OBLIGATORIOS')

      setTimeout(() => {
        setMensaje('')
      }, 3000)
      return
    }

    guardarGasto({ nombreGasto, cantidad, categoria, id, fecha })
  }

  return (
    <div className='modal'>
      <div className='cerra-modal'>
        <img
          src={cerrarModal}
          alt='Icono cerrar modal'
          onClick={handleCerrarModal}
        />
      </div>

      <form
        className={`form-nuevo-gasto ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>
          {gastoEditar.nombreGasto ? 'Editar Gasto' : 'Gasto Nuevo'}
        </legend>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='nuevo-gasto'>Nombre Gasto</label>
          <input
            type='text'
            id='nuevo-gasto'
            placeholder='Añade un nuevo Gasto'
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='cantidad-nuevo-gasto'>Cantidad</label>
          <input
            type='number'
            id='cantidad-nuevo-gasto'
            placeholder='Añade la cantidad'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='categoria-nuevo-gasto'>Categoria Gasto</label>
          <select
            id='categoria-nuevo-gasto'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>--- Selecciones una Categoria ----</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Alimentación</option>
            <option value='casa'>Casa</option>
            <option value='varios'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
        <input
          type='submit'
          value={gastoEditar.nombreGasto ? 'Guardar Cambios' : 'Añadir Gasto'}
        />
        {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default Modal
