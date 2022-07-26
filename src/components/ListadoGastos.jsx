//
import Gasto from './Gasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminrGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? `Gastos en la categoria "${filtro.toUpperCase()}"`
              : `No hay gastos en la categoria "${filtro.toUpperCase()}"`}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminrGasto={eliminrGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? `Gastos` : `No hay gastos ingresados`}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminrGasto={eliminrGasto}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ListadoGastos
