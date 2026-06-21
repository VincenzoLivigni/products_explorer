import { useEffect, useState } from "react"

export default function usePagination(filteredProducts) {

    // PAGINAZIONE
    const [page, setPage] = useState(1)

    const productPerPage = 12

    const indexOfLastPage = page * productPerPage
    const indexOfFirstPage = indexOfLastPage - productPerPage

    const currentProducts = filteredProducts.slice(indexOfFirstPage, indexOfLastPage)

    const totalPages = Math.ceil(filteredProducts.length / productPerPage)

    useEffect(() => {
        setPage(1)
    }, [filteredProducts])

    return {
        page,
        setPage,
        totalPages,
        currentProducts
    }
}