import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

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

    return (
        <>
            <div className="filters">

                <div>
                    <label>Filter by title</label>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                        <option value="Beauty">Beauty</option>
                        <option value="Fragrances">Fragrances</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Groceries">Groceries</option>
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