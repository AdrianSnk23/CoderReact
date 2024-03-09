import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const {cart, vaciarCarrito, eliminarItem, totalCarrito} = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div className='bg-dark p-5'>
      {cart.length === 0
       ? 
       <>
          <h1 className='text-warning display-1'>No hay productos en el carrito</h1>
          <Button className='bg-warning btn-lg text-white m-5 p-3' onClick={() => {navigate('/')}}>Ir al inicio</Button>
       </>
       : 
       <>
          <h1 className='text-warning text-center'>Lista de Carrito</h1>
          {cart.map((item) => (<CartItem key={item.producto.id} producto={item} eliminarItem={eliminarItem}/>))}
          <Card.Title className='text-danger text-center pt-3 mb-3 mx-5 display-3'>Total: $ {totalCarrito()}</Card.Title>
          <div className='d-flex justify-content-center'>
            <Button onClick={vaciarCarrito} variant="outline-danger" className='mx-2 btn-lg'>Vaciar Carrito</Button>
            <Button onClick={()=>{navigate('/')}} variant="outline-warning" className='mx-2 btn-lg'>Seguir Comprando</Button>
            <Button onClick={()=>{navigate('/checkout')}} variant="outline-success" className='mx-2 btn-lg'>Finalizar Compra</Button>
          </div> 
       </>
      }
    </div>
  )
}

export default Cart