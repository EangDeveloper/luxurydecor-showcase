
import ProductImage from '../../../assets/images/banner/car1.jpg'

import './styles/productImageList.css'

export default function productImageList(){

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
                </div>
            ))}
        </div>
    )
}