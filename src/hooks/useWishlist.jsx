import { useEffect, useState } from "react"

export default function useWishlist() {

    // WISHLIST + LOCALSTORAGE
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem("wishlist")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const isInWishlist = prev.find((p) => p.id === product.id)

            if (isInWishlist) {
                return prev.filter((p) => p.id !== product.id)
            } else {
                return [...prev, product]
            }
        })
    }

    return {
        wishlist,
        toggleWishlist
    }

}