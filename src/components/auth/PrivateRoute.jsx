import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const { token } = useSelector((state) => state.auth);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
