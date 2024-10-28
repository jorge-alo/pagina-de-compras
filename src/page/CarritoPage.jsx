import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import "../Styles/CarritoPage.css"

export const CarritoPage = () => {
  const {listaCompras,  aumentarProducto, disminuirProducto, eliminarProducto} = useContext(CarritoContext)
  console.log("lista de compras: ",listaCompras)
  console.log("longitud de listaCompras: ", listaCompras.length)
  const handleInprimir = () => {
    print()
  }
  const totalCuenta = () => {
    return listaCompras.reduce((total, item)=> total + item.price * item.cantidad, 0).toFixed(2)     
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th></th>
            <th>Precio</th>
            <th></th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
          listaCompras.map(item => (
             <tr key={item.id}>
              <td ><img className="imagen-tabla" src={item.image} alt="" /></td>
             <td className="titulo-tabla">{item.title}</td>
             
             <td className="precio-tabla"><b>${item.price}</b></td>
             <td>
              <button 
              className="btn-tabla"
              onClick={()=>disminuirProducto(item.id)}
              >-</button>
              <button className="btn-tabla">{item.cantidad}</button>
              <button 
              className="btn-tabla"
              onClick={()=>aumentarProducto(item.id)}
              >+</button>
             </td>
             <td>
              <button 
              className="btn-tabla-eliminar"
              onClick={()=>eliminarProducto(item.id)}>
                Eliminar producto
              </button>
             </td>
           </tr>
          ))}
          <tr>
            <td><b>Total</b></td>
            <td></td>
            <td><b>${totalCuenta()}</b></td>
            <td></td>
          </tr>
          </tbody>
      </table>
      <div className="container__btn-comprar">
      <button 
      className="btn-comprar-tabla"
      onClick={handleInprimir}
      disabled={listaCompras.length<1}>
        Comprar
      </button>
      </div>
    </>
  )
}
