
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import RoofPage from '../layouts/roof'
import PopularPage from '../layouts/popular'
import WallPage from '../layouts/wall'
import RecommendedPage from '../layouts/recommended'

import './styles/frontPageStyle.css'
import logo from '../../assets/logos/logo.png'
import bannerVideo from '../../assets/videos/caranim.mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function frontPage(){
    return(
        <>
            <Header />
            
            <div className="main-menu">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="nav">
                    <ul className='menu-list'>
                        <li><FontAwesomeIcon icon={faHouse}/>Home</li>
                        <li><FontAwesomeIcon icon={faLayerGroup}/>Collections</li>
                    </ul>
                </div>
            </div>
            <div className="banner-img">
                <div className="image">
                    <video
                        src={bannerVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="banner-title">
                    <p className='p-title'>Dream Car Interior</p>
                    <h1>Luxury Roof.</h1>
                    <h1>Redefined in Cambodia.</h1>
                    <p className='p-para'>Discover premium feature, bespoke interiors, and timeless 
                        <br/>decor pieces curated for elegant drive.
                    </p>
                    <button className='explore-btn'>Explore Collections <FontAwesomeIcon icon={faChevronRight} className='arrow'/></button>
                </div>
            </div>

            <RoofPage />
            <WallPage />
            <PopularPage />
            <RecommendedPage />

            <Footer />
        </>
    )
}

export default frontPage;