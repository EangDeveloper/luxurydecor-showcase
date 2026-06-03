
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import './styles/frontPageStyle.css'
import logo from '../../assets/logos/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

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

            <Footer />
        </>
    )
}

export default frontPage;