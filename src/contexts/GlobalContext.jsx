import { createContext, useEffect, useMemo, useState } from "react";
import useProducts from "../hooks/useProducts"
import useFilters from "../hooks/useFilters"
import usePagination from "../hooks/usePagination"
import useWishlist from "../hooks/useWishlist"

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const productsLogic = useProducts()
    const filtersLogic = useFilters(productsLogic.products)
    const paginationLogic = usePagination(filtersLogic.filteredProducts)
    const wishlistLogic = useWishlist()

    return (
        <GlobalContext.Provider value={{
            ...productsLogic,
            ...filtersLogic,
            ...paginationLogic,
            ...wishlistLogic
        }}>
            {children}
        </GlobalContext.Provider>
    )
}