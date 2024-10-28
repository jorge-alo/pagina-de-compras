import { useContext } from "react"
import { ComprasContext } from "./ComprasContext"
import { useState, useEffect } from "react"

export const ComprasProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)
    const [filtrarProductos, setFiltrarProductos] = useState([])

    const fetchProducto = async () => {
        try {

            const response = await fetch("https://fakestoreapi.com/products")
            if (!response.ok) {
                throw new Error("ha ocurrido un error al obtener los productos")
            }
            const data = await response.json()
            setProductos(data)
            setFiltrarProductos(data)
        } catch (error) {
            setError("ha ocurrido un error al cargar los productos")
        }
    }
    const handleFiltro = (valor) => {
        if (valor) {
            const Filtrados = productos.filter((item) =>
                item.title.toLowerCase().includes(valor.toLowerCase()))
            setFiltrarProductos(Filtrados)
        }else{
            setFiltrarProductos(productos)
        }
    }

    useEffect(() => {
        fetchProducto()
    }, [])

    return (
        <ComprasContext.Provider value={{ productos: filtrarProductos, handleFiltro }}>
            {children}
        </ComprasContext.Provider>
    )
}
