import { createContext, useEffect } from "react";
import { useState } from 'react';


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(init)


    useEffect(() =>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    console.log(carrito)
    const AgregarCarrito = (item) => {
        setCarrito([...carrito, item])
    }
    const cantidad = () => {
        return carrito.reduce((acceso, producto) => acceso + producto.counter, 0)

    }
    const total = () => {
        return carrito.reduce((acceso, producto) => acceso + producto.precio * producto.counter, 0)
    }

    const eliminarItem = (itemId) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== itemId)
        setCarrito(nuevoCarrito)
    }
    const carritoVacio = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value={{ AgregarCarrito, cantidad, total, carrito, eliminarItem, carritoVacio }}>
            {children}
        </CartContext.Provider>

    )
}