import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(){

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes