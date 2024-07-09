import React from 'react'
import Catalog from '../catalog/Catalog'
import Navbar from '../nav/Navbar'
import Checkout from '../checkoutpage/Checkout'
import Footer from '../footer/Footer'
import Ccatalog from '../checkoutcat/Ccatalog'
import Newsletter from './../newsletter/Newsletter';

const Check = () => {
  return (
    <div>
        <Navbar/>
        <Ccatalog/>
        <Checkout/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Check