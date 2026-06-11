import Header from '../layouts/header'
import Footer from '../layouts/footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logos/logo.png'

export default function detailPage(){
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