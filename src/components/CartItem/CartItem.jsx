import React from 'react'

const CartItem = ({producto, eliminarItem}) => {
  return (
    <div key={producto.producto.id}>
        
        <img src={producto.producto.url} alt={producto.producto.nombre} />
        <h2>{producto.producto.nombre}</h2>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Precio por cantidad: ${producto.producto.precio}</p>
        <button onClick={() => eliminarItem(producto.producto.id)}>Eliminar Producto</button>
    </div>
  )
}

export default CartItem