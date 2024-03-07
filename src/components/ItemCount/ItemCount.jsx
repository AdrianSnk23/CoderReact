import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        
        onAdd(contador)
    }

  return (
    <div>

        
        <p>Cantidad: {contador}</p>

        <button className="bg-success text-white" onClick={decrementar}>-</button>

        <button className="bg-success text-white" onClick={agregarCarrito}>Agregar al carrito</button>

        <button className="bg-success text-white" onClick={incrementar}>+</button>

    </div>
  )
}

export default ItemCount;