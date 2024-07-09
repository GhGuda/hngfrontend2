import React from 'react'
import '../catalog/Catalog.css'
import CatalogChair from '../../assets/img/unsplash_GHDGstXeWlo.png'

const Shop_catalog = () => {
  return (
    <div>
        <div className="container">
            <div className="catalog">
                <div className="catalog__content">
                    <div className="catalog__title">Shopping Cart</div>
                    <div className="shop">
                        <p>Shop / </p>
                        <p className="faint">All Products</p>
                    </div>
                </div>
                <img src={CatalogChair} alt="Catalog chair" />
            </div>
        </div>
    </div>
  )
}

export default Shop_catalog