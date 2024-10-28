import { NavLink } from "react-router-dom"
import "../Styles/NavBar.css"
import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { ComprasContext } from "../context/ComprasContext"

export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)
    const { handleFiltro } = useContext(ComprasContext)

    const [inputValue, setInputValue] = useState("")



    const cantidadProductos = listaCompras.length

    const handleChange = (e) => {

        const value = e.target.value
        setInputValue(value)
        handleFiltro(value)
    }
    return (
        <nav className="nav">
            <NavLink to="/" className="nav__compras">compras</NavLink>
            <form
                className="form-nav"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleFiltro(inputValue)
                    if (inputValue === "") {
                        handleFiltro("")
                    }
                    setInputValue("")

                }}>
                <input
                    className="input-nav"
                    type="text"
                    value={inputValue}
                    onChange={handleChange} />
                <button className="boton-form">Enviar</button>
            </form>
            <NavLink to="/carrito" className="nav__carrito">
                <div className="carrito-container">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    {cantidadProductos > 0
                        ? (<span className="item-producto">{cantidadProductos}</span>
                        )
                        : (<span ></span>)}
                </div>


            </NavLink>
        </nav>
    )
}
