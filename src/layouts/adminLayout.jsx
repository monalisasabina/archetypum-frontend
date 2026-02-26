import { Outlet } from "react-router-dom"
import SideBar from "../Components/admin/SideBar"

const AdminLayout = () => {

    return (
        <div className="admin-cont">

            <SideBar/>
            <Outlet/>

        </div>
    )
}

export default AdminLayout