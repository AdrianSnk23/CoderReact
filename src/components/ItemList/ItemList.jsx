import React from 'react'
import useFetchProductos from '../../hooks/useFetchProducts'
import Item from '../Item/Item'
import './ItemList.css'
import { useParams } from 'react-router-dom'

const ItemList = () => {
  const {categoria} = useParams()
  const {productos, loading} = useFetchProductos(categoria)
  console.log(categoria)

  return (
    <>
      <div className='contenedor'>
        {loading 
        ? 
        (<h1>Cargando...</h1>)
        : 
        (productos.map((producto) => {
          return (
            <div className='carta' key={producto.id}>
              <Item key={producto.id} producto={producto}/>
            </div>
            )
          })
        )}
      </div>
    </>    
  )
}

export default ItemList