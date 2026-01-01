import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/users/User";
import UnitManagement from "./pages/admin/unitManagement/UnitManagement";
import UnitRegistration from "./pages/admin/unitManagement/UnitRegistration";
import Toaster from "./components/admin/common/Toaster";
import AddIncentiveScheme from "./pages/admin/incentiveSchemes/AddIncentiveScheme";
import IncentiveApplicationForm from "./pages/admin/incentiveSchemes/IncentiveApplicationForm";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./components/auth/PrivateRoute";
import RoleBasedRoute from "./components/auth/RoleBasedRoute";
import { ROLE_GROUPS } from "./constants/roles";

function App() {
    return (
        <>
            <Toaster />
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Navigate to="/auth/login" replace />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />

                    {/* User Routes (Regular Users Only) */}
                    <Route element={<PrivateRoute />}>
                        <Route element={<RoleBasedRoute allowedRoles={ROLE_GROUPS.USER_ONLY} />}>
                            <Route path="/user" element={<AdminLayout />}>
                                <Route path="dashboard" element={<Dashboard />} />
                                <Route path="incentive-schemes-application" element={<IncentiveApplicationForm />} />
                            </Route>
                        </Route>
                    </Route>

                    {/* Admin Routes (Admin, Super Admin, Content Manager) */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/admin" element={<AdminLayout />}>
                            {/* Dashboard - Accessible to all admin roles */}
                            <Route path="dashboard" element={<Dashboard />} />

                            {/* Super Admin Only Routes */}
                            <Route element={<RoleBasedRoute allowedRoles={ROLE_GROUPS.SUPER_ADMIN_ONLY} />}>
                                <Route path="users" element={<User />} />
                            </Route>

                            {/* Admin & Super Admin Routes */}
                            <Route element={<RoleBasedRoute allowedRoles={ROLE_GROUPS.ADMIN_AND_ABOVE} />}>
                                <Route path="unit-management" element={<UnitManagement />} />
                                <Route path="unit-registration" element={<UnitRegistration />} />
                            </Route>

                            {/* Content Manager Routes */}
                            <Route element={<RoleBasedRoute allowedRoles={ROLE_GROUPS.CONTENT_MANAGER_ACCESS} />}>
                                <Route path="add-incentive-schemes" element={<AddIncentiveScheme />} />
                            </Route>
                        </Route>
                    </Route>

                    {/* 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
