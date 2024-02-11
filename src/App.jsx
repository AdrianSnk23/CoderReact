import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/presentacion' element={<QuienesSomos/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
