import { useState } from 'react';

import Header from '../layouts/header'
import Footer from '../layouts/footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup, faDownload } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logos/logo.png'

import Img from '../../assets/images/banner/pic10.png'
import img1 from '../../assets/images/banner/pic8.jpeg'
import img2 from '../../assets/images/banner/pic7.jpeg'
import img3 from '../../assets/images/banner/car1.jpg'

import './styles/detailPageStyle.css'

export default function DetailPage(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = mainImage;
        link.download = 'luxury-decor-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const [mainImage, setMainImage] = useState(Img);

    return(
        <>
            <Header />

            <div className="detail-menu">
                <div className="detail-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="detail-search-bar">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="detail-nav">
                    <ul className='detail-menu-list'>
                        <li><FontAwesomeIcon icon={faHouse}/>Home</li>
                        <li><FontAwesomeIcon icon={faLayerGroup}/>Collections</li>
                    </ul>
                </div>
            </div>
            <div className="detail-row-img">
                <div className="detail-col-img">
                    <div className="main-image">
                        <img src={mainImage} alt="" />
                    </div>
                    <div className="thumbnail-row">
                        <img src={img1} onClick={() => setMainImage(img1)} />
                        <img src={img2} onClick={() => setMainImage(img2)} />
                        <img src={img3} onClick={() => setMainImage(img3)} />
                    </div>
                </div>
                <div className="detail-col-text">
                    <span className="product-category">
                        Luxury Collection
                    </span>
                    <h1>Modern Roof Design</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque, consequatur.
                    </p>
                    <div className="product-features">
                        <h3>Features</h3>
                        <ul>
                            <li>Premium Quality</li>
                            <li>Weather Resistant</li>
                            <li>Luxury Finish</li>
                            <li>Custom Design Available</li>
                        </ul>
                    </div>
                    <div className="button-group">
                        <button
                            className="download-btn"
                            onClick={handleDownload}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            Download Image
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}