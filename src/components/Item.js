import React, {useContext} from 'react'
import {CartContext} from '../Contexts/CartContext.js'

export default function Item() {
    const {Cart, setCart} = useContext(CartContext)
  return (
    <div class="food_products_card">
        <div class="card_left_div">
          <div class="veg_logo">
            </div>
            <h4 class="product_title">Super 6s Bucket Meal</h4>
            <p class="product_price">₹931.43</p>
            <p class="product_descrip">Save 21% on combo of 6 Hot &amp; Crispy Chicken, 6 Strips, Medium Fries &amp; Pepsi PET [serves 3]</p>
            </div>
            <div class="card_right_div">
          <div class="food_img">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq" alt=""/>
            </div>
            <button class="add_cart" onClick={()=>{setCart([...Cart,'Food1'])}}>ADD</button>
            </div>
            </div>
  )
}
