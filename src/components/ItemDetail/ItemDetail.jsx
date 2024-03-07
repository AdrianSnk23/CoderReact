import { useContext, useState } from 'react'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {CartContext}  from '../../context/cartContext';


const ItemDetail = ({productos}) => {

  const [cart, setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext) //aca consume la función que le asigne de CartContext

  const onAdd = (contador) => {

    setCart(true)

    agregarCarrito(productos, contador)

  }

  return (
    <div className="column bg-dark">
        <Card style={{ width: '25rem' }} className='bg-warning'>
      <Card.Img variant="top" src={productos.url} />
      <Card.Body>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${productos.precio}</Card.Subtitle>
        <Card.Text> Stock: {productos.stock}</Card.Text>
        <Card.Text>{productos.descripcion}</Card.Text>
        {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCount initial={1} stock={productos.stock} onAdd={onAdd}/>}
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail