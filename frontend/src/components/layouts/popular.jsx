
import banner from '../../assets/images/banner/car1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './styles/popularStyle.css'

export default function popular(){
    return(
        <>
            <div className="main-popular">
                <div className="popular-title">
                    <h1>Our Popular Styles.<FontAwesomeIcon icon={faFire}/></h1>
                </div>
                <div className="popular-image-container">
                    <div className="popular-image-section">
                        <div className="popular-banner">
                            <img src={banner} alt="" />

                            <div className="popular-banner-content">
                                <div>
                                    <h1>Modern Catholic Starlight Ceiling.</h1>
                                    <p>Best style of all style.</p>
                                </div>
                                <div>
                                    <p className='popular-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vero harum culpa optio expedita alias recusandae iusto molestias veritatis ipsum saepe deserunt, officia fugit quos necessitatibus cupiditate nam quod sit?</p>
                                </div>

                                <div className="popular-banner-arrow">
                                    <button>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popular-image-container">
                    <div className="popular-image-section">
                        <div className="popular-banner reverse">
                            <img src={banner} alt="" />

                            <div className="popular-banner-content">
                                <div>
                                    <h1>Modern Catholic Starlight Ceiling.</h1>
                                    <p>Best style of all style.</p>
                                </div>
                                <div>
                                    <p className='popular-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste vero harum culpa optio expedita alias recusandae iusto molestias veritatis ipsum saepe deserunt, officia fugit quos necessitatibus cupiditate nam quod sit?</p>
                                </div>

                                <div className="popular-banner-arrow">
                                    <button>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}