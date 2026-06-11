
import ProductImage from '../../../assets/images/banner/car1.jpg'

import './styles/productImageList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function productImageList(){

    const handleDownload = (image, title) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = `${title}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const products = [
        { id: 1, title: "Roof Top", image: ProductImage },
        { id: 2, title: "Modern Wall", image: ProductImage },
        { id: 3, title: "Luxury Ceiling", image: ProductImage },
        { id: 4, title: "Wood Design", image: ProductImage },
        { id: 5, title: "Classic Roof", image: ProductImage },
        { id: 6, title: "Premium Wall", image: ProductImage },
    ]

    return(
        <div className="product-container">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.title} />

                    <h3>{product.title}</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button
                        className="pro-download-btn"
                        onClick={() => handleDownload(product.image, product.title)}
                    >
                        <FontAwesomeIcon icon={faDownload}/>
                        Download
                    </button>
                </div>
            ))}
        </div>
    )
}