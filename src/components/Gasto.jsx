//
import { formatearFecha, formatearCantidad } from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

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

const Gasto = ({ gasto, setGastoEditar, eliminrGasto }) => {
  const { nombreGasto, cantidad, categoria, id, fecha } = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminrGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='contenedor'>
          <div className='componente-gasto sombra contenedor'>
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
