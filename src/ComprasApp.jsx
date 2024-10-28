import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./component/NavBar"
import { ComprasPage } from "./page/ComprasPage"
import { CarritoPage } from "./page/CarritoPage"
import { ComprasProvider } from "./context/ComprasProvider"
import "./Styles/ComprasApp.css"
import { CarritoProvider } from "./context/CarritoProvider"

export const ComprasApp = () => {
    return (
        <>
            <ComprasProvider>
                <CarritoProvider>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </CarritoProvider>
            </ComprasProvider>
        </>
    )
}
