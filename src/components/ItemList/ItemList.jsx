import React from 'react'
import Item from '../Item/Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({productos}) => {
  return (
    <Container>
    <Row>
      <Col>{productos.map((producto) =>{
            return(
                <Item producto={producto}/>
            )
        })}</Col>
    </Row>
  </Container>
  )
}

export default ItemList