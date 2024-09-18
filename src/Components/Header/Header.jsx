import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const navLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/listed_books">Listed Books</NavLink>
        <NavLink to="/pages_to_read">Pages to Read</NavLink>
    </>
    return (
        <nav className="navbar bg-base-100 mt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <p className="text-2xl lg:text-3xl font-semibold px-1">Book Vibe</p>
            </div>
            <div className="navbar-center hidden lg:flex gap-10 text-xl">
                {navLinks}
            </div>
            <div className="navbar-end gap-1 md:gap-5">
                <a className="btn btn-ghost text-white bg-[#23BE0A] px-5 text-lg md:text-xl">Sign In</a>
                <a className="btn btn-ghost text-white bg-[#59C6D2] px-5 text-lg md:text-xl">Sign Up</a>
            </div>
        </nav>
    );
};

export default Header;