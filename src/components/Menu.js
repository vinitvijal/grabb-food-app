import React from 'react'
import './Menu.css'
import Category from './Category'
import { Link } from 'react-router-dom'
export default function Menu() {

  return (
    <div>
      <div className='checkOutDiv'>
        <Link to='/payout'>Rs. 239 | Checkout</Link>
      </div>
      
      <section id='bannerRestaurant'>
        <img src='https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="" />
        <h1 style={{fontSize: '4rem',color: 'white',fontWeight: '400'}}>Wah Ji Wah Kitchen</h1>
      </section>
      <div className='scrollCategory'>
        <a href="#home">Paranthas</a>
        <a href="#news">Sabzi</a>
        <a href="#contact">Thali</a>
        <a href="#about">Main Course</a>
        <a href="#home">Rice</a>
        <a href="#news">Bevereges</a>
        <a href="#contact">Chinese</a>
        <a href="#about">Sweet</a>
        <a href="#home">Combo</a>

      </div>
      <hr/>
      <Category/>
    </div>
  )
}
