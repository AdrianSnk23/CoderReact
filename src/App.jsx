import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Banana Pixel, la verduleria virtual."}/>}></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        {/* <ItemDetailContainer id={2}/> */}
      </BrowserRouter>
    </>
  )
}

export default App
