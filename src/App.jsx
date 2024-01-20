import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting={"Bienvenidos a Banana Pixel, la verduleria virtual."}/>
    </>
  )
}

export default App
