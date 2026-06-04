
import Logo from '../../assets/logos/logo.png'
import './styles/footerStyle.css'

import ABAQR from '../../assets/images/qr/aba.png'
import KHQR from '../../assets/images/qr/khqr.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, 
    faClock, faMedal, faPencilRuler, faTruck, faShield } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTelegram } from '@fortawesome/free-brands-svg-icons'

export default function footer(){
    return(
        <section className='footer-section'>
            <footer className='main-footer'>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <p>Crafting refined interiors and exceptional <br/>spaces with timeless elegance.
                        <br/>Proudly based in Cambodia.
                    </p>
                    <div className="main-info">
                        <div className="info-location">
                            <FontAwesomeIcon icon={faLocationDot} className='gold-icon'/><a href="#">Phnom Penh, Cambodia</a>
                        </div>
                        <div className="info-number">
                            <FontAwesomeIcon icon={faPhone} className='gold-icon'/><a href="#">+855 10 254 446</a>
                        </div>
                        <div className="info-email">
                            <FontAwesomeIcon icon={faEnvelope} className='gold-icon'/><a href="#">luxurydecor168@gmail.com</a>
                        </div>
                        <div className="info-hour">
                            <FontAwesomeIcon icon={faClock} className='gold-icon'/><a href="#">Mon - Sun: 6:00 AM - 6:00 PM</a>
                        </div>
                    </div>
                </div>
                <div className="main-explore">
                    <h3>Explore</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Collections</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="main-collections">
                    <h3>Collections</h3>
                    <ul>
                        <li>VIP Ceiling</li>
                        <li>Standard Ceiling</li>
                        <li>Vip Wall</li>
                        <li>Standard Wall</li>
                        <li>Vip floor</li>
                        <li>Standard floor</li>
                    </ul>
                </div>
                <div className="main-customer">
                    <h3>Customer care</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>warrently</li>
                        <li>experience guide</li>
                        <li>Return & Exchanges</li>
                        <li>Warranty</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="main-inspired">
                    <h3>Stay inspired</h3>
                    <p>Build your dream with us</p>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className='face'/></a>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} className='tele'/></a>
                </div>
            </footer>
            <div className="cerficate">
                <div className="premium">
                    <FontAwesomeIcon icon={faMedal} className='gold-cer-icon'/>
                    <div className="premium-detail">
                        <h4>Premium Qualtiy</h4>
                        <p>Carefully curated, explore crafted.</p>
                    </div>
                </div>
                <div className="solution">
                    <FontAwesomeIcon icon={faPencilRuler} className='gold-cer-icon'/>
                    <div className="solution-detail">
                        <h4>Bespoke solutions</h4>
                        <p>Tailored to your unique space.</p>
                    </div>
                </div>
                <div className="delivery">
                    <FontAwesomeIcon icon={faTruck} className='gold-cer-icon'/>
                    <div className="delivery-detail">
                        <h4>Fast Delivery</h4>
                        <p>Deliver your car on time.</p>
                    </div>
                </div>
                <div className="warranty">
                    <FontAwesomeIcon icon={faShield} className='gold-cer-icon'/>
                    <div className="warranty-detail">
                        <h4>Trust & Warranty</h4>
                        <p>Quality you can trust, every time.</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copy">
                    <p>&copy; {new Date().getFullYear()} Luxury Decor Cambodia. All rights reserved.</p>
                </div>
                <div className="logo-foot">
                    <img src={Logo} alt="" />
                </div>
                <div className="credit-card">
                    <p>We Accept</p>
                </div>
                <div className="card">
                    <img src={ABAQR} alt="" />
                    <img src={KHQR} alt="" />
                </div>
            </div>
        </section>
    )
}