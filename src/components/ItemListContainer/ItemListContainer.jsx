import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {

  const [productos,setProductos] = useState([])

  const {categoria} = useParams()

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await fetch("/productos/productos.json")
        const data = await response.json()

        if(categoria){
          const filteredProducts = data.filter((p) => p.categoria == categoria)
          setProductos(filteredProducts)
        }else{
          setProductos(data)
        }
      }
      catch(error){
        console.log("error en el fetch"+error)
      }
    }
  fetchData()
  },[categoria])


  return (
    <>
    <div className='text-bg-dark text-center p-0 margin'>
      {productos.length == 0 ? <h1>CARGANDO...</h1> : <ItemList productos={productos}/>}
    </div>
    </>
  )
}

export default ItemListContainer