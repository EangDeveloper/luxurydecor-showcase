
import Header from '../layouts/header'
import Footer from '../layouts/footer'

import ProductImageList from '../layouts/components/productImagelist'

import logo from '../../assets/logos/logo.png'
import './styles/productPageStyle.css'

export default function productList(){
    return(
        <>
            <Header />
            <div className="product-menu">
                <div className="product-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="product-nav">
                    <ul className='product-menu-list'>
                        <li><a href="#">All Products</a></li>
                        <li><a href="#">Roofs</a></li>
                        <li><a href="#">Walls</a></li>
                        <li><a href="#">Floors</a></li>
                        <li><a href="#">Seats</a></li>
                        <li><a href="#">Steps</a></li>
                        <li><a href="#">Air Vent</a></li>
                        <li><a href="#">Leather</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
            </div>

            <ProductImageList />

            <Footer />
        </>
    )
}
