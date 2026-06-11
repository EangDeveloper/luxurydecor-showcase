
import './styles/recommended.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import banner from '../../assets/images/banner/pic10.png'

export default function recommended(){
    return(
        <>
            <div className="main-recommended">
                <div className="recommended-title">
                    <h1>Our Recommended Styles. <FontAwesomeIcon icon={faThumbsUp}/></h1>
                </div>
                <div className="recommended-image-container">
                    <div className="recommended-image-section">
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                        <div className="recommended-banner">
                            <img src={banner} alt="" />
                            <div className="recommended-content">
                                <h3>Premium Black & Orange</h3>
                                <p>
                                    Luxury interior design with premium materials
                                    and modern styling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
