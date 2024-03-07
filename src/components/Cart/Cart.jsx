import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link, useNavigate } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const {cart, vaciarCarrito, eliminarItem, totalCarrito} = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <div>
      {cart.length === 0
       ? 
       <>
       <h1>No hay productos en el carrito</h1>
       <button onClick={() => {navigate("/")}}>ir al inicio</button>
       </>
       : 
       <>
       <h1>Lista de Carrito</h1> {cart.map((producto) => (<CartItem key={producto.producto.id} producto={producto} eliminarItem={eliminarItem}/>))}
       <p>Total: $ {totalCarrito()}</p>
       <button onClick={vaciarCarrito}>Vaciar Carrito</button>
       </>
      }
    </div>
  )
}

export default Cart