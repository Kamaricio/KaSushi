// import React, { useState } from 'react'
import "./ItemCounter.css"
export const ItemCounter = ({max, modify, cantidad}) => {

    // const [counter, SetCounter] = useState(1)
    const restar = () => {
        if (cantidad > 0){
            modify( cantidad - 1 )
        }
    }
    const sumar = () => {
        if(cantidad < max){
        modify( cantidad + 1 )
    }
    }
  return (
    <>
       <div className='boton'> 
       <p>Cantidad: {cantidad}</p>
        <button onClick={sumar}>+🍙</button>
        <button onClick={restar}>-🍘</button>
        {/* <button onClick={reset}>🍽</button> */}

       </div>
    </>
  )
}
