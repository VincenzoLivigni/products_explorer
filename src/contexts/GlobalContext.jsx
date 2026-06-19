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

    // FILTRI
    const [search, setSearch] = useState("")
    const [sortOrderTitle, setSortOrderTitle] = useState("Select")
    const [selectedCategory, setSelectedCategory] = useState("Select")
    const [sortOrderPrice, setSortOrderPrice] = useState("Select")
    const [sortOrderRating, setSortOrderRating] = useState("Select")

    const filteredProducts = [...products]
        .filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase()) &&
            (selectedCategory === "Select" || p.category === selectedCategory)
        )

        .sort((a, b) => {
            if (sortOrderTitle === "A-Z") return a.title.localeCompare(b.title)
            if (sortOrderTitle === "Z-A") return b.title.localeCompare(a.title)

            if (sortOrderPrice === "Increasing") return a.price - b.price
            if (sortOrderPrice === "Decreasing") return b.price - a.price

            if (sortOrderRating === "Increasing") return b.rating - a.rating
            if (sortOrderRating === "Decreasing") return a.rating - b.rating

            return 0
        })

    function resetFilters() {
        setSearch("")
        setSortOrderTitle("Select")
        setSelectedCategory("Select")
        setSortOrderPrice("Select")
        setSortOrderRating("Select")
    }

    // PAGINAZIONE
    const [page, setPage] = useState(1)

    const productPerPage = 12

    const indexOfLastPage = page * productPerPage
    const indexOfFirstPage = indexOfLastPage - productPerPage

    const currentProducts = filteredProducts.slice(indexOfFirstPage, indexOfLastPage)

    const totalPages = Math.ceil(filteredProducts.length / productPerPage)

    useEffect(() => {
        setPage(1)
    }, [search, sortOrderTitle, selectedCategory, sortOrderPrice, sortOrderRating])

    return (
        <GlobalContext.Provider value={{
            products,
            setProducts,
            loading,
            error,

            search,
            setSearch,
            sortOrderTitle,
            setSortOrderTitle,
            selectedCategory,
            setSelectedCategory,
            sortOrderPrice,
            setSortOrderPrice,
            sortOrderRating,
            setSortOrderRating,

            filteredProducts,
            resetFilters,

            page,
            setPage,
            totalPages,
            currentProducts
        }}>
            {children}
        </GlobalContext.Provider>
    )
}