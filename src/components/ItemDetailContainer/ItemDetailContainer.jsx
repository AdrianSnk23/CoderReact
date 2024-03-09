import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore,getDoc, doc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})

    const {id} = useParams()
      
    useEffect (() => {
        const nuevoDoc = doc(db, "producto", id)

        getDoc(nuevoDoc).then(res => {
            const data = res.data()
            const nuevoProducto = {id: res.id,...data}
            setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))
    },[])
    
  return (
    <div className='d-flex justify-content-center bg-dark'>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer