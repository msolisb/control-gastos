//
import { formatearFecha, formatearCantidad } from '../helpers'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  varios: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones,
}

const Gasto = ({ gasto }) => {
  const { nombreGasto, cantidad, categoria, id, fecha } = gasto
  return (
    <div>
      <div className='componente-gasto sombra'>
        <img src={diccionarioIconos[categoria]} alt='Iconos Gastos' />

        <div className='gasto-contenido'>
          <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombreGasto}</p>
            <p className='fecha-gasto'>
              <span>Agregado el: </span>
              {formatearFecha(fecha)}
            </p>
          </div>
          <p className='cantidad-gasto'>{formatearCantidad(cantidad)}</p>
        </div>
      </div>
    </div>
  )
}

export default Gasto
