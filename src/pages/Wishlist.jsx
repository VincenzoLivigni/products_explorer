import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"

export default function Wishlist() {

    const { wishlist } = useContext(GlobalContext)


    return (
        <>
            <h1>Wishlist</h1>

            <div className="container">
                <div className="row g-3">
                    {
                        wishlist.length === 0 ? (
                            <div className="col-12 text-center">
                                <h2>No products in wishlist</h2>
                            </div>
                        ) : (
                            wishlist.map((p) => (
                                <div key={p.id} className="col-lg-3 col-md-6 col-sm-12">
                                    <Card
                                        product={p}
                                    />
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}