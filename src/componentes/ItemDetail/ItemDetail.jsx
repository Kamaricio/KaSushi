import React, { useContext, useState } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id,identidad, nombre, precio, image, decripcion, categoria, stock }) => {
    
    const navigate = useNavigate()

    const volver = ()=>{
        navigate(-1)
    }

    const { AgregarCarrito } = useContext(CartContext)

    const [counter, setCounter] = useState(1)


    const sumarCarrito =()=>{
      const itemNuevo ={
        id,
        identidad,
        nombre,
        precio,
        image,
        decripcion,
        categoria,
        counter

      }  
      console.log(itemNuevo)
      AgregarCarrito(itemNuevo)
    }

    return (
        

            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 1 }).map(() => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{nombre}</Card.Title>
                                <Card.Text>{precio}</Card.Text>
                                <Card.Text>  {categoria}</Card.Text>
                                <Card.Text>{decripcion}</Card.Text>
                                <ItemCounter max={stock} modify={setCounter} cantidad={counter}/>
                                <Button onClick={volver} variant="green">Volver</Button>
                                <Button variant="dark" onClick={sumarCarrito}>Agregar al carrito</Button>
                                <Link to="/carrito" className='btn btn-info'>Ir al carrito</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        
    )
}
