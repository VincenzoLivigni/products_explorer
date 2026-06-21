import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardDetail from "../components/CardDetail"

export default function ProductDetail() {

    const api = "https://dummyjson.com/products"

    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // RECUPERO DATI
    const fetchProductDetail = async () => {
        try {
            setLoading(true)
            setError(false)

            const res = await fetch(`${api}/${id}`)

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`)
            }

            const data = await res.json()
            setProduct(data)
        }
        catch (err) {
            console.log("Error: ", err)
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductDetail()
    }, [id])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Error data fetching</h2>
    }

    return (
        <>
            <h1>{product.title} Detail</h1>

            <div className="container">
                <CardDetail
                    product={product}
                />
            </div>
        </>
    )
}