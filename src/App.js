import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/users/User";
import UnitManagement from "./pages/admin/unitManagement/UnitManagement";
import AdminLayout from "./pages/components/admin/layouts/AdminLayout";
import UnitRegistration from "./pages/admin/unitManagement/UnitRegistration";
import Toaster from "./pages/components/admin/common/Toaster";
import AddIncentiveScheme from "./pages/admin/incentiveSchemes/AddIncentiveScheme";
import IncentiveApplicationForm from "./pages/admin/incentiveSchemes/IncentiveApplicationForm";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Panle */}
          <Route path="/admin" element={<AdminLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<User />} />
            <Route path="unit-management" element={<UnitManagement />} />
            <Route path="unit-registration" element={<UnitRegistration />} />
            <Route path="add-incentive-schemes" element={<AddIncentiveScheme />} />
            <Route path="incentive-schemes-application" element={<IncentiveApplicationForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
