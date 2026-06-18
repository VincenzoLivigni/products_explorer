import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"

export default function ProductList() {

    const {
        products,
        loading,
        error
    } = useContext(GlobalContext)

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Error data fetching</h2>
    }

    return (
        <>
            <h1>Product list</h1>

            <div className="container">
                <div className="row g-3">
                    {
                        products.map((p) => (
                            <div key={p.id} className="col-lg-3 col-md-6 col-sm-12">
                                <Card
                                    product={p}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}