//

export const generarId = () => {
  const random = Math.random().toString(36).substr(2)
  const dateRandom = Date.now().toString(36)

  return random + dateRandom
}

export const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return nuevaFecha.toLocaleDateString('es-ES', options)
}

export const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
