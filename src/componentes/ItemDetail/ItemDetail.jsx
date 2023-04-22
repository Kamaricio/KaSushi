import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap"
import { ItemCounter } from '../ItemCounter/ItemCounter';

export const ItemDetail = ({ id, nombre, precio, image, decripcion, categoria }) => {
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
                                <ItemCounter/>
                                <Button variant="dark">Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        
    )
}
