//import React from 'react'
import { formatearCantidad } from '../helpers'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  //
  return (
    <>
      <section className='control-presupuesto contenedor-control sombra'>
        <div>
          <p>Gráfica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
          <p>
            Presupuesto: <span>{formatearCantidad(presupuesto)}</span>
          </p>
          <p>
            Disponible: <span>$0.00</span>
          </p>
          <p>
            Gastado: <span>$0.00</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default ControlPresupuesto
