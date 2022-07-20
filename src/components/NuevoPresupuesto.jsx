import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  //

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto válido')
      return
    }

    setMensaje('')

    setIsValidPresupuesto(true)
  }

  return (
    <section className='contenedor-presupuesto contenedor '>
      <form className='formulario sombra' onSubmit={handlePresupuesto}>
        <div className='campo'>
          <label className='label-presupuesto' htmlFor='presupuesto'>
            Definir Presupuesto
          </label>
          <input
            type='number'
            id='presupuesto'
            className='input-presupuesto'
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
          <input
            type='submit'
            value='Añadir Presupuesto '
            className='submit-presupuesto'
          />
        </div>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </section>
  )
}

export default NuevoPresupuesto
