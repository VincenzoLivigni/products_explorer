import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Products</NavLink>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                </nav>
            </header>
        </>
    )
}