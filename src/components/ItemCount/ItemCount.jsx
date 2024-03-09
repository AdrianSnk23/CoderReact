import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
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
        <Button className="bg-success text-white px-3" onClick={decrementar}>-</Button>
        <Button className="bg-success text-white mx-1 px-1" onClick={agregarCarrito}>Agregar al carrito</Button>
        <Button className="bg-success text-white px-3" onClick={incrementar}>+</Button>
    </div>
  )
}

export default ItemCount;