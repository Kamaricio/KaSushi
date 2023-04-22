import React, { useState } from 'react'
import "./ItemCounter.css"
export const ItemCounter = () => {

    const [counter, SetCounter] = useState(1)
    const restar = () => {
        if (counter > 0){
            SetCounter( counter-1 )
        } else {
            SetCounter(0)
        }
    }
    const sumar = () => {
        SetCounter( counter+1 )
    }
    const reset = () => {
        SetCounter(0)
    }
  return (
    <>
       <div className='boton'> 
       <p>Cantidad: {counter}</p>
        <button onClick={sumar}>+🍙</button>
        <button onClick={restar}>-🍘</button>
        <button onClick={reset}>🍽</button>

       </div>
    </>
  )
}
