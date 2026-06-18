import { Link } from "react-router-dom";

export default function Card({ product }) {

    return (
        <>
            <div className="card">
                <Link to={`/product/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} />
                </Link>

                <div className="card-body">
                    <Link to={`/product/${product.id}`}>
                        <h3>{product.title}</h3>
                    </Link>

                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> {product.price} €</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating}</p>
                </div>
            </div>
        </>
    )
}