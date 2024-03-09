import React from 'react'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import useFetchProductos from "../../hooks/useFetchProducts"


const Promos = () => {
  
  
  const {productos, loading} = useFetchProductos("promos")
 

  

  return (
    <div id='promocion' className='text-bg-dark text-center p-0 margin'>
      {loading ?
        <h1>CARGANDO...</h1>
        :
        <div className='d-flex justify-content-around'>
          {productos.map((promo, index) => ( 

            <div className='carta' key={index}>
              <Link to={`/detalle/${promo.id}`}>
                    <div className="column m-3 ">
                      <Card style={{ width: '35rem' }} className='bg-warning'>
                        <Card.Img variant="top" src={promo.url} />
                        <Card.Body>
                          <Card.Title className='text-dark'>{promo.nombre}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
              </Link>
            </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Promos
