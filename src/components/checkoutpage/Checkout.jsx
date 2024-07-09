import React from 'react'
import '../checkoutpage/Checkout.css'

import paypal from "../../assets/img/logos_paypal.png"
import visa from "../../assets/img/logos_visa.png"
import mastercard from "../../assets/img/mastercard.png"
import tick from "../../assets/img/tick.png"
import ArmchairImage from '../../assets/img/unsplash_GHDGstXeWlo.png';
import CeilingLightsImage from '../../assets/img/light.png';
import SofaImage from '../../assets/img/sofa.png'; 
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='checkout__cont'>
        <div className="checkout__left">
            <form action="">
                <div className="userdetails">
                    <p>Personal Information</p>
                    <div className="firstch">
                        <div className="input__cont">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="" id="firstname" placeholder='Akachukwu' />
                        </div>
                        <div className="input__cont">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="" id="lastname" placeholder='Adedeji' />
                        </div>


                        <div className="input__cont">
                            <label htmlFor="number">Phone Number</label>
                            <input type="number" name="" id="number" placeholder='0594074717' />
                        </div>
                        <div className="input__cont">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" placeholder='nola11@gmail.com' />
                        </div>
                    </div>
                    
                </div>


                <div className="userdetails">
                    <p>Delivery Details</p>
                    <div className="firstch">
                        <div className="input__cont">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="" id="country" placeholder='Ghana' />
                        </div>
                        <div className="input__cont">
                            <label htmlFor="state">State/City</label>
                            <input type="text" name="" id="state" placeholder='Accra' />
                        </div>
                        <div className="input__cont">
                            <label htmlFor="shipping">Shipping Address</label>
                            <input type="text" name="" id="shipping" placeholder='Kasoa - Kakraba' />
                        </div>
                        <div className="input__cont">
                            <label htmlFor="zipcode">Zip Code</label>
                            <input type="text" name="" id="zipcode" placeholder='567689' />
                        </div>
                    </div>
                    
                </div>

                <div className="userdetails">
                    <p>Customized Notes</p>

                    <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Order should be delivered carefully in boxes and in perfect condtion. '/>
                </div>



                <div className="userdetails">
                    <p>Payment Method</p>
                    <div className="input__cont">
                        <div className="options">
                            <div className="payment__details">
                                <div className="radio">
                                    <span></span>
                                    <p>Paypal</p>
                                </div>
                                
                                <div className="payment__img">
                                    <img src={paypal} alt="" />
                                </div>
                            </div><hr className='phr' />
                            <div className="payment__details">
                                <div className="radio">
                                    <span className='spimg'><img src={tick} alt="" /></span>
                                    <p>Credit or Debit Card</p>
                                </div>
                                
                                <div className="payment__img">
                                    <img src={mastercard} alt="" />
                                    <img src={visa} alt="" />
                                </div>
                            </div><hr className='phr' />

                            <div className="card__info">
                                <div className="card_details">
                                    <p>Card Number</p>
                                    <input type='text' className='fir' placeholder='2245 - 6789 - 1011 - 2011' id='cardnumber'/>
                                </div>

                                <div className="caps">
                                    <div className="card_details">
                                        <p>Expiry Date</p>
                                        <input type='text' className='expi' placeholder='12/12/2026' id='expire'/>
                                    </div>

                                    <div className="card_details">
                                        <p>CVV</p>
                                        <input type='text' className='expi' placeholder='---' id='cvv'/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
        <div className="checkout__right">
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="itemcont">
                    <hr className="phrr" />
                    <div className="item">
                        <img src={ArmchairImage} alt="" />
                        <div className="sum__info">
                            <div>Brown Soft Cushion Armchair</div>
                            <div>₦125,000</div>
                            <span>1</span>
                        </div>
                    </div>
                    <hr className="phrr" />
                    <div className="item">
                        <img src={CeilingLightsImage} alt="" />
                        <div className="sum__info">
                            <div>Gold Ceiling Lights</div>
                            <div>₦125,000</div>
                            <span>2</span>
                        </div>
                    </div>
                    <hr className="phrr" />
                    <div className="item">
                        <img src={SofaImage} alt="" />
                        <div className="sum__info">
                            <div>Green Modern Day Sofa</div>
                            <div>₦125,000</div>
                            <span>1</span>
                        </div>
                    </div>
                    <hr className="phrr" />
                </div>
                <div className="tt">
                    <div className="total">
                        <div>Total</div>
                        <div>₦443,000</div>
                    </div>
                    <div className="total">
                        <div>Discount</div>
                        <div>−₦18,350</div>
                    </div>
                    <div className="total">
                        <div>Pick up delivery</div>
                        <div>₦5,000</div>
                    </div>
                    <hr className="phrrr" />
                </div>
                <div className="estimated-total">
                    <div>Estimated Total</div>
                    <div>₦429,650</div> 
                </div>
                <b className="btnn">Make Payment</b>
                <Link to="/cart">
                    <b className="btnn edit">Edit Cart</b>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Checkout