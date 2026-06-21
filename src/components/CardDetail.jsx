import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function CardDetail({ product }) {

    const { wishlist, toggleWishlist } = useContext(GlobalContext)

    const isFav = wishlist.some((p) => p.id === product.id)

    return (
        <>
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={product.thumbnail} alt={product.title} />
                </div>

                <div className="card-detail-right">
                    <h3>{product.title}</h3>

                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> {product.price} €</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating}</p>

                    <button onClick={() => toggleWishlist(product)}>
                        {isFav ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </>
    )
}