import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div className="column m-1">
        <Card style={{ width: '25rem' }} className='bg-success'>
      <Card.Img variant="top" src={producto.url} />
      <Card.Body>
        <Card.Title className='text-light'>{producto.nombre}</Card.Title>
      </Card.Body>
    </Card>
  </div>
    </Link>
    )
}

export default Item