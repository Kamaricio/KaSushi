import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, precio, image, categoria }) => {
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
                                <Link to={`/detail/${id}`}>
                                <Button variant="dark">Añadir</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        
    )
}
