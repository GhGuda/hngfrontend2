import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../nav/Navbar.css'
import push from '../../assets/img/cart.png'
import user from '../../assets/img/profile.png'
import heart from '../../assets/img/like.png'
import search from '../../assets/img/search-normal.png'
import menu from '../../assets/img/menu.png'
import cancel from '../../assets/img/cancel.png'

const Navbar = () => {
  const mobile = window.innerWidth<=750 ? true : false
  const [menuOpened, setmenuOpened] = useState(false)
  return (
    <div>
      <div className="nav_wrapper">
        <div className="signinsec">
            <div className="signinsec1">
              <i>Sign in to our app to start shopping</i>
            </div>

            <div className="icons">
              <img className='two' src={search} alt="like" />
              <img className='two' src={heart} alt="like" />
              <Link to="/cart"><img className='one'  src={push} alt="cart" /></Link>
              <img src={user} alt="user" />
              <span>9</span>
            </div>
        </div>
        <nav>
          <Link to="/"><p className="logo">Timbu Cloud Shop</p></Link>

         
          {(menuOpened===false && mobile===true)?(
              <img onClick={()=> setmenuOpened(true)} className='hum' src={menu} alt="" />
              // <div ><img src={menu}  alt="" /></div>
          ):(
            <ul>
              <img onClick={()=> setmenuOpened(false)} className='gaga' src={cancel} alt="" />
              <Link to="/" onClick={()=> setmenuOpened(false)}><li>Home</li></Link>
              <li onClick={()=> setmenuOpened(false)}>Shop</li>
              <li onClick={()=> setmenuOpened(false)}>About us</li>
              <li onClick={()=> setmenuOpened(false)}>Contact Us</li>
              <li onClick={()=> setmenuOpened(false)}>Blog</li>
            </ul>
          )}
          
        </nav>
      </div>
    </div>
  )
}

export default Navbar