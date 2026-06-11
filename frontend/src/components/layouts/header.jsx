
import './styles/headerStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTelegram, } from '@fortawesome/free-brands-svg-icons';

export default function Header(){
    return(
        <>
            <div className="top-header">
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="gold-icon"/><a href="#">Phnom Penh, Cambodia.</a>
                </div>
                <div className="paragraph">
                    <p>Timeless Elegance. Crafted for Cambodia.</p>
                </div>
                <div className="social-media">
                    <div className="number-phone">
                        <FontAwesomeIcon icon={faPhone} className="gold-phone"/><a href="">+855 10 254 446</a>
                    </div>
                    <div className="facebook">
                        <a href="https://www.facebook.com/p/Luxury-Decor-Cambodia-61583619916530/"><FontAwesomeIcon icon={faFacebookF} className='gold-social'/></a>
                    </div>
                    <div className="telegram">
                        <a href="#"><FontAwesomeIcon icon={faTelegram} className='gold-social'/></a>
                    </div>
                    <div className="admin">
                        <a href="#"><FontAwesomeIcon icon={faUser} className='gold-social'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}