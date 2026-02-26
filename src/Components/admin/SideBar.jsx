import { NavLink } from "react-router-dom";

const SideBar = () => {

    return(
        <nav className="sidebar-cont">

            <div className="side-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
                <NavLink to="/admin/create-blog">Create Blog</NavLink>
            </div>
     
        

        </nav>
    )
}

export default SideBar;