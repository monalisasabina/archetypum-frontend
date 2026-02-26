import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate();

    // Handle log out
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return(
        <nav className="sidebar-cont">
 
            {/* Links */}
            <div className="side-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
                <NavLink to="/admin/create-blog">Create Blog</NavLink>
            </div>

            {/* Log Out button */}
            <button className="logout-btn" onClick={handleLogout}>
                Log Out
            </button>

        </nav>
    )
}

export default SideBar;