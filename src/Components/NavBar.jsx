import{ NavLink }from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/projects">Projects</NavLink>
             <NavLink to="/contact_us">Contact Us</NavLink>
        </nav>
    );
};

export default NavBar;