import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Nopage from './components/nopage/Nopage';
import Check from './components/check/Check';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/check' element={<Check/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
