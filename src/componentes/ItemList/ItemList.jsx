import React from 'react';
import { Item } from '../Item/Item';
import "./ItemList.css";


export const ItemList = ({productos=[]}) => {

  return (
    <div className='contenedor'>
        <h2> lista de sushis</h2>
        <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
