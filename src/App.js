import React from 'react'
import Header from './Components/Header/Header'
import Search from './Components/Serche/Search'
import Cart from './Components/Cart/Cart'
import Menus from "./Components/Menus/Menus"

import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <div className="section-container">
        <Cart />
        <Menus />
      
      </div>
    </div>
  )
}

export default App
