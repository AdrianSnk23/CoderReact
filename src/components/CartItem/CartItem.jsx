import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CartItem = ({producto, eliminarItem}) => {
  return (
    <div key={producto.producto.id} className='m-2 d-flex justify-content-center'>
      <Card className='bg-warning' style={{ width: '25rem' }}>
        <Card.Img variant="top" src={producto.producto.url} alt={producto.producto.nombre} />
        <Card.Body>
          <Card.Title>{producto.producto.nombre}</Card.Title>
          <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
          <Card.Text>Precio por cantidad: ${producto.producto.precio}</Card.Text>
          <Button variant="secondary" onClick={() => eliminarItem(producto.producto.id)}>Eliminar Producto</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CartItem