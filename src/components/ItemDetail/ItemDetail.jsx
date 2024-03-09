import { useContext, useState } from 'react'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import {CartContext}  from '../../context/cartContext';


const ItemDetail = ({producto}) => {

  const navigate = useNavigate()
  
  const [cart, setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (contador) => {

    setCart(true)

    agregarCarrito(producto, contador)

  }
  
  return (
    <div className="column m-5">
      <Card style={{ width: '25rem' }} className='bg-warning'>
        <Card.Img variant="top" src={producto.url} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">${producto.precio}</Card.Subtitle>
          <Card.Text> Stock: {producto.stock}</Card.Text>
          <Card.Text>{producto.descripcion}</Card.Text>

          {producto.stock === 0 && <p className='display-5 text-danger'>No hay stock disponible</p>}

          {producto.stock > 0 && !cart
          ? 
          (
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
          )
          : ""}

          {cart 
          ? 
          (
            <>
              <Button onClick={() => { navigate('/cart') }} className='bg-success text-white m-1' >Ir al carrito</Button>
              <Button onClick={() => { navigate('/') }} className='bg-success text-white m-1'>Seguir Comprando</Button>
            </>
          )
          : ""}
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail