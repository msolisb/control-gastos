import { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='filtro contenedor sombra'>
      <form>
        <label htmlFor='filtro'>Filtrar por Categoria</label>
        <select
          id='filtro'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value=''>--- Todas las Categorias ----</option>
          <option value='ahorro'>Ahorro</option>
          <option value='comida'>Alimentación</option>
          <option value='casa'>Casa</option>
          <option value='varios'>Gastos Varios</option>
          <option value='ocio'>Ocio</option>
          <option value='salud'>Salud</option>
          <option value='suscripciones'>Suscripciones</option>
        </select>
      </form>
    </div>
  )
}

export default Filtros
