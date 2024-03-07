import React,{useState,useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';
import Promos from '../Promos/Promos';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import "./ItemListContainer.css"
import useFetchProductos from '../../hooks/useFetchProducts';


const ItemListContainer = () => {
  const {categoria} = useParams()
  const {productos} = useFetchProductos(categoria)
  const navigate = useNavigate()
  const scrollToPromo = () => {
    if (categoria) {
      navigate('/promos')
    }else{
    document.getElementById("promocion").scrollIntoView()
    }
  }

  return (
    <>
      <div>
        <div onClick={scrollToPromo} className='bannerPromo'>
          <p className='bannerP'>OFERTAS IMPERDIBLES AQUI</p>
          <img src='../assets/img/Logo/bolsa-llena-verduras.jpg' alt="bolsa de verduras" className='promo'/>
        </div>
      </div>

      <div className='text-bg-dark text-center p-0 margin'>
        {productos.length === 0 ? <h1>CARGANDO...</h1> : <ItemList productos={productos}/>}
      </div>
    </>
  )
}

export default ItemListContainer