import { useContext } from "react"
import "../Styles/Card.css"
import { CarritoContext } from "../context/CarritoContext"

export const Card = ({ imagen, titulo, descripcion, precio, agregarProducto, eliminarProducto, producto }) => {
  const { listaCompras } = useContext(CarritoContext)
  const productoAgregado = listaCompras.some(item => item.id == producto.id)
  return (
    <>
      <div className="card-container">
        <div className="container-datos">
          <img className="imagen-card" src={imagen} alt={titulo} />
          <h2>{titulo}</h2>
          <p className="descripcion">{descripcion}</p>
          <p className="precio">${precio}</p>
        </div>
        <div className="boton-container">
          {
            productoAgregado ? <button
              className="btn-card boton-card-red"
              onClick={eliminarProducto}
            >Quitar producto
            </button>
              : <button
                className="btn-card boton-card-green"
                onClick={agregarProducto}>
                Agregar producto</button>}
        </div>
      </div>
    </>
  )
}
