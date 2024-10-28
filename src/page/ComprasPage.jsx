import { useContext } from "react"
import { ComprasContext } from "../context/ComprasContext"
import { Card } from "../component/Card"
import { CarritoContext } from "../context/CarritoContext"


export const ComprasPage = () => {
    const { productos } = useContext(ComprasContext)
    const {agregarProducto,eliminarProducto} = useContext(CarritoContext)
    return (
        <>
            <div className="container">
                {productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                        agregarProducto={()=>agregarProducto(producto)}
                        eliminarProducto={()=>eliminarProducto(producto.id)}
                        producto={producto}
                    ></Card>
                )
                )}
                
            </div>
        </>
    )
}
