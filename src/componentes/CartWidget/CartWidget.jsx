import React, { useContext } from 'react'
import {BsCart2} from "react-icons/bs";
import "./CartWidget.css";
import { CartContext } from '../Context/CartContext';
export const CartWidget = () => {

  const {cantidad} = useContext(CartContext)

  return (
    <>
      <BsCart2 className='carrito'/>
      <span>{ cantidad() }</span>
    </>
  )
}
