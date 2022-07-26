import { useState, useEffect } from 'react'
import Filtros from './components/Filtros'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const presupuestoLS = Number(localStorage.getItem('presupuesto')) || 0
  //const gastosLS = JSON.parse(localStorage.getItem('gastos')) || []

  const [presupuesto, setPresupuesto] = useState(presupuestoLS)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')
      ? JSON.parse(localStorage.getItem('gastos'))
      : []
  )

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')

  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  //Presupuesto a localStorage

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto || 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) || [])
  }, [gastos])

  useEffect(() => {
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  //Filtrando por categoria

  useEffect(() => {
    const gastosFiltradosNew = gastos.filter(
      (gasto) => gasto.categoria === filtro
    )
    //console.log(gastosFiltrados)
    setGastosFiltrados(gastosFiltradosNew)
  }, [filtro])

  const handleModal = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      )
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      //Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 600)
  }

  const eliminrGasto = (id) => {
    const gastosActualizados = gastos.filter(
      (gastoState) => gastoState.id !== id
    )

    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminrGasto={eliminrGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div>
            <img
              src={iconoNuevoGasto}
              alt='Icon de nuevo gasto'
              className='icono-nuevo-gasto'
              onClick={handleModal}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  )
}

export default App
