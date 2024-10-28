import { useContext, useReducer } from "react"
import { CarritoContext } from "./CarritoContext"
import { ComprasContext } from "./ComprasContext"

const initialState = []
export const CarritoProvider = ({ children }) => {

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[carrito] agregar producto":
        return [...state, action.payload]

      case "[carrito] aumentar producto":       
        return state.map(item => {
            const cant = item.cantidad +1
          if(item.id === action.payload)return{...item, cantidad : cant}
           return item
          
          }
        )
      case "[carrito] disminuir producto":
        return state.map(item => {
          const cant = item.cantidad -1
        if(item.id === action.payload && item.cantidad > 1)return{...item, cantidad : cant}
         return item
        
        }
      )
        
      case "[carrito] eliminar producto":
        return state.filter(compra => compra.id !== action.payload)
      default:
        break;
    }

  }

  const [listaCompras, dispatch] = useReducer(reducer, initialState)

  const agregarProducto = (producto) => {
    producto.cantidad = 1
    const action = {
      type: "[carrito] agregar producto",
      payload: producto
    }
    dispatch(action)

  }
  const aumentarProducto = (id) => {
    const action = {
      type: "[carrito] aumentar producto",
      payload: id
    }
    dispatch(action)

  }
  const disminuirProducto = (id) => {
    const action = {
      type: "[carrito] disminuir producto",
      payload: id
    }
    dispatch(action)

  }
  const eliminarProducto = (id) => {
    const action = {
      type: "[carrito] eliminar producto",
      payload: id
    }
    dispatch(action)

  }
  return (
    <>
      <CarritoContext.Provider value={{ listaCompras,agregarProducto, aumentarProducto, disminuirProducto, eliminarProducto }}>
        {children}
      </CarritoContext.Provider>
    </>
  )
}
