import React from 'react'
import Navbar from '../nav/Navbar'
import Catalog from '../catalog/Catalog'
import Products from '../products/Products'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Catalog/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home