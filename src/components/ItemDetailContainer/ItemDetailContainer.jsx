import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({}) => {
    const [productos, setProductos] = useState ([])

    const {id} = useParams()

    useEffect (() => {
        const fetchData = async () =>{
            try{
                const response = await fetch("/productos/productos.json")
                const data = await response.json()
                const productos = data.find((p)=>p.id == id)
                setProductos(productos)
            }
            catch(error){
                console.log("error en el fetch" + error)
            }
        }
        fetchData()
    },[id])
  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer