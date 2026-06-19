import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Pagination() {

    const {
        page,
        setPage,
        totalPages
    } = useContext(GlobalContext)

    return (
        <>
            <div className="pagination">
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>

                <span>{page} / {totalPages} </span>

                <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    )
}