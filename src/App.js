import React, { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin} />
       <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/order" element={<PlaceOrder/>} />
          <Route exact path='/verify' element={<Verify/>} />
          <Route exact path="/myorders" element={<MyOrders/>} />
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;