
import './styles/wallStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import banner from '../../assets/images/banner/pic7.jpeg'

export default function wall(){
    return(
        <>
            <div className="main-section">
                <div className="title">
                    <h2>Discover Our Signature Styles</h2>
                    <div className="button">
                        <button><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
                        <button><FontAwesomeIcon icon={faCircleArrowRight}/></button>
                    </div>
                </div>
                <div class="image-container">
                    <div class="image-section">
                        <div class="banner">
                            <img src={banner} alt=""/>
                            <div className="banner-content">
                                <h3>Premium Leather Wall VIP</h3>
                                <p>Modern Catholic style, Premuim leather feeling.</p>
                                <div className="banner-arrow">
                                    <button><FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>

                        <div class="banner">
                            <img src={banner} alt=""/>
                        </div>

                        <div class="banner">
                            <img src={banner} alt=""/>
                        </div>

                        <div class="banner">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}