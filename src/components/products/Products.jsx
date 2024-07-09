import React, { useState } from 'react'
import '../products/Products.css'
import ArrowUp from '../../assets/img/arrow-up.png'
import Tick from '../../assets/img/tick.png'
import Like from '../../assets/img/like.png'
import Cart from '../../assets/img/cart.png'


// product images 
import chair from '../../assets/img/chair1.png'
import groupchair from '../../assets/img/groupchair.png'
import light from '../../assets/img/light.png'
import greychair from '../../assets/img/greychair.png'
import furnituretable from '../../assets/img/furnituretable.png'
import brownsofa from '../../assets/img/brownsofa.png'
import sofa from '../../assets/img/sofa.png'
import chairligh from '../../assets/img/chairligh.png'
import high from '../../assets/img/high.png'


const Products = () => {
  return (
    <div>
        <div className="product_wrapper">
            <div className="left">
                <p className='head'>Filter Options</p>
                <div className="left__item">
                    <div className="product_cat">
                        <div className="actions">
                            <p>Product category</p>
                            <img src={ArrowUp} alt="" />
                        </div>

                        <ul>
                            <li>All</li>
                            <li>Chairs</li>
                            <li>Sofas</li>
                            <li>Tables</li>
                            <li>Bed</li>
                            <li>Others</li>
                        </ul>
                    </div>

                    <div className="product_cat">
                        <div className="actions">
                            <p>Material</p>
                            <img src={ArrowUp} alt="" />
                        </div>

                        <ul>
                            <li>All</li>
                            <li>Leather</li>
                            <li>Plastic</li>
                            <li>Acrylic</li>
                            <li>Wood</li>
                            <li>Plastic</li>
                        </ul>
                    </div>
                    
                    <div className="product_cat">
                        <div className="actions">
                            <p>Price</p>
                        </div>
                        
                        <div className="price_actions">
                            <small>¢100,000 - ¢500,000</small>

                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="product_cat">
                       <div className="actions">
                            <p>Colors</p>
                       </div>
                        <div className="colors_actions">
                            <div className='gp1'>
                                <span></span>
                                <span></span>
                                <span><img src={Tick} alt="tick" /></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='gp2'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="righthead">
                    <div className="right_act">
                        <p>Filter Options</p>
                        <img src={ArrowUp} alt=""  />

                        <div className="libis">
                            <div className="left__item">
                                <div className="product_cat">
                                    <div className="actions">
                                        <p>Product category</p>
                                        <img src={ArrowUp} alt="" />
                                    </div>

                                    <ul>
                                        <li>All</li>
                                        <li>Chairs</li>
                                        <li>Sofas</li>
                                        <li>Tables</li>
                                        <li>Bed</li>
                                        <li>Others</li>
                                    </ul>
                                </div>

                                <div className="product_cat">
                                    <div className="actions">
                                        <p>Material</p>
                                        <img src={ArrowUp} alt="" />
                                    </div>

                                    <ul>
                                        <li>All</li>
                                        <li>Leather</li>
                                        <li>Plastic</li>
                                        <li>Acrylic</li>
                                        <li>Wood</li>
                                        <li>Plastic</li>
                                    </ul>
                                </div>
                                
                                <div className="product_cat">
                                    <div className="actions">
                                        <p>Price</p>
                                    </div>
                                    
                                    <div className="price_actions">
                                        <small>¢100,000 - ¢500,000</small>

                                        <div className="line"></div>
                                    </div>
                                </div>

                                <div className="product_cat">
                                    <div className="actions">
                                            <p>Colors</p>
                                    </div>
                                    <div className="colors_actions">
                                        <div className='gp1'>
                                            <span></span>
                                            <span></span>
                                            <span><img src={Tick} alt="tick" /></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className='gp2'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right_action">
                        <p>Sort by:</p>
                        <select>
                            <option hidden>Default</option>
                            {/* <option>Price</option> */}
                        </select>
                    </div>
                    
                </div>

                <div className="cards_container">
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={chair} alt="chair" />
                        </div>
                        <p>Wooden Chair With leat...</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 32,000</p>
                                <s>¢ 32,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        {/* <div className="miandiscount">
                            <p>-10%</p>
                        </div> */}

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    {/* <p>-10%</p> */}
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={furnituretable} alt="chair" />
                        </div>
                        <p>Table book shelf</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 12,000</p>
                                <s>¢ 126,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        <div className="miandiscount">
                            <p>-10%</p>
                        </div>

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    <p>-10%</p>
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={light} alt="chair" />
                        </div>
                        <p>Golden Ceiling Lights</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 98,000</p>
                                <s>¢ 102,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        <div className="miandiscount">
                            <p>-10%</p>
                        </div>

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    <p>-10%</p>
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={greychair} alt="chair" />
                        </div>
                        <p>Ash Local Chair</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 22,000</p>
                                <s>¢ 42,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        <div className="miandiscount">
                            <p>-10%</p>
                        </div>

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    <p>-10%</p>
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={high} alt="chair" />
                        </div>
                        <p>High Top Kitchen Stool</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 15,000</p>
                                {/* <s>¢ 32,000</s> */}
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        {/* <div className="miandiscount">
                            <p>-10%</p>
                        </div> */}

                        <div className="hover">
                            <div className="hover_action">
                                {/* <div className="discount">
                                    <p>-10%</p>
                                </div> */}

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={brownsofa} alt="chair" />
                        </div>
                        <p>Brown Leather Sofa</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 112,000</p>
                                <s>¢ 126,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        <div className="miandiscount">
                            <p>-10%</p>
                        </div>

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    <p>-10%</p>
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={chairligh} alt="chair" />
                        </div>
                        <p>Swedish Armchair</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 102,000</p>
                                {/* <s>¢ ,000</s> */}
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        {/* <div className="miandiscount">
                            <p>-10%</p>
                        </div> */}

                        <div className="hover">
                            <div className="hover_action">
                                {/* <div className="discount">
                                    <p>-10%</p>
                                </div> */}

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={groupchair} alt="chair" />
                        </div>
                        <p>Dinning Table Setting</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 198,000</p>
                                <s>¢ 202,000</s>
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        <div className="miandiscount">
                            <p>-10%</p>
                        </div>

                        <div className="hover">
                            <div className="hover_action">
                                <div className="discount">
                                    <p>-10%</p>
                                </div>

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_container">
                            <img className='itemimg' src={sofa} alt="chair" />
                        </div>
                        <p>Green Morden Day Sofa</p>
                        <div className="price_love">
                            <div className="count">
                                <p>¢ 112,000</p>
                                {/* <s>¢ 32,000</s> */}
                            </div>
                            <img src={Like} alt="like" />
                        </div>

                        {/* <div className="miandiscount">
                            <p>-10%</p>
                        </div> */}

                        <div className="hover">
                            <div className="hover_action">
                                {/* <div className="discount">
                                    <p>-10%</p>
                                </div> */}

                                <div className="cart">
                                    <p>Add to cart</p>
                                    <img src={Cart} alt="cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview">
                     <p>Prev</p>

                     <span>1</span>
                     <span>2</span>
                     <span>3</span>
                     <span>4</span>
                     <span>...</span>
                     <span>25</span>
                     <p>Next</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products