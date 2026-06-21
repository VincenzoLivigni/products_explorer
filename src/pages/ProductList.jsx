import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card"
import Filters from "../components/Filters"
import Pagination from "../components/Pagination"

export default function ProductList() {

    const {
        currentProducts,
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
            <Filters />

            <h1>Products</h1>

            <Pagination />

            <div className="container">
                <div className="row g-3">
                    {
                        currentProducts.length === 0 ? (
                            <div className="col-12 text-center">
                                <h2>No product found</h2>
                            </div>
                        ) : (
                            currentProducts.map((p) => (
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

            <Pagination />
        </>
    )
}