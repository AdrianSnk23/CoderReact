import React, { useContext } from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext)
  let cantidad = cantidadCarrito()
  console.log(cantidad)

  return (
    <>
    <div className='centrar'>
      <Link to={"/cart"}><img src="/public/assets/img/Carrito/carrito.png" alt="" className="carritoImg"/></Link>
      <p className='m-0'>{cantidad === 0 ? null : cantidad}</p>
    </div>
    
    </>
  )
}

export default CartWidget