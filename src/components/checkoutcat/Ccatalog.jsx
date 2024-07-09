import React from 'react'
import '../catalog/Catalog.css'
import CatalogChair from '../../assets/img/unsplash_GHDGstXeWlo.png'


const Ccatalog = () => {
  return (
    <div>
        <div className="container">
            <div className="catalog">
                <div className="catalog__content">
                    <div className="catalog__title">Check Out</div>
                    <div className="shop">
                        <p>Shop / </p>
                        <p className="faint">All Products/</p>
                        <p className="faint">Cart</p>
                    </div>
                </div>
                <img src={CatalogChair} alt="Catalog chair" />
            </div>
        </div>
    </div>
  )
}

export default Ccatalog