//
import { useState, useEffect } from 'react'
import { formatearCantidad } from '../helpers'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    )
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado

    setDisponible(totalDisponible)

    const nuevoPorcentaje = ((totalGastado * 100) / presupuesto).toFixed(2)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1500)
  }, [gastos])

  const handleResetApp = () => {
    const resultado = confirm('Desear reinicia presupuesto y gastos')

    if (resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <>
      <section className='control-presupuesto contenedor sombra'>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
            styles={buildStyles({
              textSize: '10px',
              pathTransitionDuration: 1.5,
              pathColor: porcentaje > 100 ? 'red' : '#3b82f6',
              textColor: porcentaje > 100 ? 'red' : '#64748b',
              trailColor: '#e0e0e0',
            })}
          />
        </div>
        <div className='contenido-presupuesto'>
          <button className='reset-app' onClick={handleResetApp}>
            Resetear App
          </button>
          <p>
            Presupuesto: <span>{formatearCantidad(presupuesto)}</span>
          </p>
          <p>
            Gastado: <span>{formatearCantidad(gastado)}</span>
          </p>
          <p className={`${disponible < 0 ? 'negativo' : ''}`}>
            Disponible: <span>{formatearCantidad(disponible)}</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default ControlPresupuesto
