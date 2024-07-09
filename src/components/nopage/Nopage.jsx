import React from 'react'
import Navbar from '../nav/Navbar'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';
import '../nopage/Nopage.css'

const Nopage = () => {

  return (
    
    <div>
        <Navbar/>
        <div className="nop">
          <p>🙄Omo, no page found!🙄</p>

          <Link to="/"><h4>Home</h4></Link>
        </div>
        <Footer/>
        </div>
  )
}

export default Nopage