import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Card({ product }) {

    const { wishlist, toggleWishlist } = useContext(GlobalContext)

    const isFav = wishlist.some((p) => p.id === product.id)

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

                    <button onClick={() => toggleWishlist(product)}>
                        {isFav ? "Remove from wishlist ❤️" : "Add to wishlist 🤍"}
                    </button>
                </div>
            </div>
        </>
    )
}