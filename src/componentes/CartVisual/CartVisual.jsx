import React, { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import "./CartVisual.css"
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


export const CartVisual = () => {

    const { carrito, total, eliminarItem, carritoVacio } = useContext(CartContext)


    return (
        <div className='Container'>
            <h3>Orden de pedido</h3>
            {
                carrito.length === 0?<div className='Center'>
                <h4>
                El carrito esta carritoVacio
                </h4>
                <Link to="/" className='btn btn-dark'>Volver a la tienda</Link>
                </div>
                :<>
                
            {
                carrito.map((producto) => (
                    <>

                        <hr />
                        <div className="listado">
                            <p> <span>Produto:</span>  {producto.nombre}</p>
                            <p>$ {producto.precio}</p>
                            <p>Cantidad: {producto.counter}</p>
                            <Button className='btn btn-danger' onClick={() => eliminarItem(producto.id)}>
                                <BsTrash />
                            </Button>
                        </div>
                    </>
                ))
            }
            <div className="Center">
                <hr />
                <strong>Total del pedido: ${total()}</strong>
                <hr />
                <button className='btn btn-danger ' onClick={carritoVacio}>
                    vaciar carrito
                </button>
                <Link className='btn btn-success' to="/CheckOut">
                    Finalizar compra
                </Link>
            </div>
            </>
            }
        </div>

    )
}
