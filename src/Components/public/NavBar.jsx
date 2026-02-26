import{ NavLink }from "react-router-dom";
import "./NavBar.css"
import { useState } from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="navbar-logo">
                    <NavLink to="/">Archetypum-Africa</NavLink>
            </div>

            {/* Hamburger Button */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${isOpen ? "active" : ""}`}>
               <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
               <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
               <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
               <NavLink to="/blog"  onClick={() => setIsOpen(false)}>Blog</NavLink>
               <NavLink to="/contact_us" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
               <NavLink to="/admin/dashboard" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;