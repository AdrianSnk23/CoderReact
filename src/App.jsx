import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Promos from './components/Promos/Promos';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/cartContext';
import Error from './components/Error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/presentacion' element={<QuienesSomos/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/promos' element={<Promos/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        </CartProvider>
        
      </BrowserRouter>
    </>
  )
}


export default App
