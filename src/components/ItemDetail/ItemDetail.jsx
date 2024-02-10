import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({productos}) => {
  return (
    <div className="column bg-dark">
        <Card style={{ width: '25rem' }} className='bg-warning'>
      <Card.Img variant="top" src={productos.url} />
      <Card.Body>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${productos.precio}</Card.Subtitle>
        <Card.Text> Stock: {productos.stock}</Card.Text>
        <Card.Text>{productos.descripcion}</Card.Text>
        <ItemCount initial={1} stock={productos.stock}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail