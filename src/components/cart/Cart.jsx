import React from 'react'
import Navbar from '../nav/Navbar'
import Footer from './../footer/Footer';
import '../cart/Cart.css'

import ArmchairImage from '../../assets/img/unsplash_GHDGstXeWlo.png';
import CeilingLightsImage from '../../assets/img/light.png';
import SofaImage from '../../assets/img/sofa.png'; 
import minus from '../../assets/img/Line 4.png'
import plus from '../../assets/img/plus.png'
import Shop_catalog from '../shopcatalog/Shop_catalog';
import { Link } from 'react-router-dom';
import Newsletter from '../newsletter/Newsletter';
const Cart = () => {
  return (
    <div>
        <Navbar/>
        <Shop_catalog/>
        
        <div className="cart-container">
          <div className='cart__header'>
                  <p>Product</p>
                  <div className="cartl">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                  </div>
              </div>
              
              <hr className="design" />
              <div className="product-details">
                <img src={ArmchairImage} alt="Brown Soft Cushion Armchair" className="product-image" />
                <div className='check__cont'>
                  <p>Brown Soft Cushion Armchair</p>

                  <div className="pdcover">
                    <small className='out'>₦125,000</small>

                    <div className="quantity-controls">
                      <button className="decrement"><img src={minus} alt="" /></button>
                      <span>1</span>
                      <button className="increment"><img src={plus} alt="" /></button>
                    </div>

                    <td className='out'>₦125,000</td>
                  </div>
                </div>
              </div>


              <hr className="design" />
              <div className="product-details">
                <img src={CeilingLightsImage} alt="Gold Ceiling Lights" className="product-image" />
                <div className='check__cont'>
                  <p>Gold Ceiling Lights</p>

                  <div className="pdcover">
                    <small className='out'>₦196,000</small>

                    <div className="quantity-controls">
                      <button className="decrement"><img src={minus} alt="" /></button>
                      <span>2</span>
                      <button className="increment"><img src={plus} alt="" /></button>
                    </div>

                    <td className='out'>₦196,000</td>
                  </div>
                </div>
              </div>






              <hr className="design" />
              <div className="product-details">
                <img src={SofaImage} alt="Green Modern Day Sofa" className="product-image" /> 
                <div className='check__cont'>
                  <p>Green Modern Day Sofa</p>

                  <div className="pdcover">
                    <small className='out'>₦122,000</small>

                    <div className="quantity-controls">
                      <button className="decrement"><img src={minus} alt="" /></button>
                      <span>1</span>
                      <button className="increment"><img src={plus} alt="" /></button>
                    </div>

                    <td className='out'>₦122,000</td>
                  </div>
                </div>
              </div>
              <hr className="design" />
                
                

          <div className="cart-summary">
            <div className="code">
              <div className="promo-code">
                <label htmlFor="promo-code">Promo/Coupon Code</label>
                <form action="" className='cartform'>
                  <input type="text" id="promo-code" placeholder="Enter Code" />
                  <button className='btn'>Apply</button>
                </form>
              </div>

              <div className="delivery">
                <label htmlFor="delivery-mode">Delivery</label>
                <select className='mode' id="delivery-mode">
                  <option>Select Delivery Mode</option>
                </select>
              </div>
            </div>

            <div className="total-summary">
              <div className="summary_cover">
                <div>
                  <p>Total:</p>
                  <p>Discount: </p>
                  <p className="estimated-total">Estimated Total: </p>
                </div>
                <div>
                  <p className='one'>₦443,000</p>
                  <p className='two'>-₦18,350</p>
                  <p>₦424,650</p>
                </div>
            </div>
            
              <Link to="/check">
                <button className="checkout-button">Proceed To Checkout</button>
              </Link>
          </div>
          
        </div>
        </div>
        

        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Cart