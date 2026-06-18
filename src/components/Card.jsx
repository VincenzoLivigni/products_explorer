export default function Card({ product }) {

    return (
        <>
            <div className="card">
                <img src={product.thumbnail} alt={product.title} />

                <div className="card-body">
                    <h3>{product.title}</h3>

                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> {product.price} €</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating}</p>
                </div>
            </div>
        </>
    )
}