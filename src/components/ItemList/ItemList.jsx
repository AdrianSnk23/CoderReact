import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
      
      <div className='contenedor'>
        {productos.map((producto) =>{
            return(
              <div className='pruebaGrid'>
                <Item producto={producto}/>
              </div>
            )
        })}
      </div>
    
  )
}

export default ItemList