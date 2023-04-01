import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Table from './components/Table';
import ErrorPage from './components/ErrorPage';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Payment from './components/Payment';
import { CartContext } from './Contexts/CartContext';
import { useState } from 'react';



function App() {
  const [Cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{Cart, setCart}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path=':rest/' exact element={<Menu/>} errorElement={<ErrorPage/>}/>
          <Route path=':rest/:table' element={<Table/>} errorElement={<ErrorPage/>}/>
          <Route path='/payout' element={<Payment/>}/>
        </Routes>
        <Footer/>
      </CartContext.Provider>
    </>
  );
}

export default App;
