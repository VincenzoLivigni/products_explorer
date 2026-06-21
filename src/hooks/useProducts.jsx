import { useEffect, useState } from "react"

export default function useProducts() {
    const api = "https://dummyjson.com/products"

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    // RECUPERO DATI
    const fetchProducts = async () => {
        try {
            setLoading(true)
            setError(false)

            const res = await fetch(api)

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`)
            }

            const data = await res.json()
            setProducts(data.products)
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
        fetchProducts()
    }, [])

    return {
        products,
        setProducts,
        loading,
        error
    }
}