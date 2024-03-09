import React, { useContext } from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext)
  let cantidad = cantidadCarrito()

  return (
    <>
      <div className='centrar'>
        <Link to={"/cart"}><img src="/public/assets/img/Carrito/carrito.png" alt="carro de compras" className="carritoImg"/></Link>
        <p className='m-0 bg-danger'>{cantidad === 0 ? 0 : cantidad}</p>
      </div>
    </>
  )
}

export default CartWidget