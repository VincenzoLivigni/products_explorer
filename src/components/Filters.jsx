import { useContext, useMemo } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function debounce(callback, delay) {
    let timer;

    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function Filters() {

    const {
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

        resetFilters
    } = useContext(GlobalContext)

    const debounceSetSearch = useMemo(() =>
        debounce(setSearch, 350)
        , [setSearch])

    return (
        <>
            <div className="filters">

                <div>
                    <label>Filter by title</label>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => debounceSetSearch(e.target.value)}
                    />
                </div>

                <div>
                    <label>Sort order by title</label>
                    <select
                        value={sortOrderTitle}
                        onChange={(e) => setSortOrderTitle(e.target.value)}
                    >
                        <option value="Select">Select</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>

                <div>
                    <label>Filter by category</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="Select">All</option>
                        <option value="beauty">Beauty</option>
                        <option value="fragrances">Fragrances</option>
                        <option value="furniture">Furniture</option>
                        <option value="groceries">Groceries</option>
                    </select>
                </div>

                <div>
                    <label>Sort order by price</label>
                    <select
                        value={sortOrderPrice}
                        onChange={(e) => setSortOrderPrice(e.target.value)}
                    >
                        <option value="Select">Select</option>
                        <option value="Increasing">Increasing</option>
                        <option value="Decreasing">Decreasing</option>
                    </select>
                </div>

                <div>
                    <label>Sort order by rating</label>
                    <select
                        value={sortOrderRating}
                        onChange={(e) => setSortOrderRating(e.target.value)}
                    >
                        <option value="Select">Select</option>
                        <option value="Increasing">Increasing</option>
                        <option value="Decreasing">Decreasing</option>
                    </select>
                </div>

                <div>
                    <button onClick={resetFilters}>Reset filters</button>
                </div>
            </div>
        </>
    )
}