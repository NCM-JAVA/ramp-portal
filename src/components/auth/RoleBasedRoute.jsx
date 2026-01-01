import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RoleBasedRoute = ({ allowedRoles = [] }) => {
    const { user, token } = useSelector((state) => state.auth);

    // Check if user is authenticated
    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    // Check if user has required role
    if (allowedRoles.length > 0 && user) {
        const hasRequiredRole = allowedRoles.includes(user.role);

        if (!hasRequiredRole) {
            // User doesn't have required role, redirect to unauthorized page
            return <Navigate to="/unauthorized" replace />;
        }
    }

    // User has required role, render the child routes
    return <Outlet />;
};

export default RoleBasedRoute;
