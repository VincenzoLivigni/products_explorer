import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

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

    return (
        <GlobalContext.Provider value={{
            products,
            setProducts,
            loading,
            error
        }}>
            {children}
        </GlobalContext.Provider>
    )
}