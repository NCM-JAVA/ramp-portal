import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import UnitRegister from "./pages/auth/UnitRegister";
import Dashboard from "./pages/admin/Dashboard";
import User from "./pages/admin/users/User";
import AvailableSchemes from "./pages/admin/Schemes/AvailableSchemes";
import UnitManagement from "./pages/admin/unitManagement/UnitManagement";
import UnitRegistration from "./pages/admin/unitManagement/UnitRegistration";
import Toaster from "./components/admin/common/Toaster";
import AddIncentiveScheme from "./pages/admin/incentiveSchemes/AddIncentiveScheme";
import IncentiveApplicationForm from "./pages/admin/incentiveSchemes/IncentiveApplicationForm";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import ApplicationList from "./pages/admin/applicationManagement/ApplicationList";
import SchemeApplicationForm from "./pages/admin/Schemes/SchemeApplicationForm";
import ProgressReporting from "./pages/admin/progressReporting/ProgressReporting";
import Marketplace from "./pages/admin/marketPlace/MarketPlace";
import Grievance from "./pages/admin/grievance/Grievance";
import Notifications from "./pages/admin/notifications/Notifications";
import MyProfile from "./pages/admin/myProfile/MyProfile";

import DicAdminLayout from "./components/dic/layouts/DicAdminLayout";
import DicDashboard from "./pages/dic/Dashboard";
import VerificationQueue from "./pages/dic/verification/VerificationQueue";
import CommencementQueue from "./pages/dic/commencement/CommencementQueue";
import DirectorateReview from "./pages/dic/directorate/DirectorateReview";
import SLCCommencement from "./pages/dic/slc/SLCCommencement";
import AuthenticationCertificate from "./pages/dic/certificate/AuthenticateCertificate";
import DICProfile from "./pages/dic/myProfile/MyProfile";

import DirectorateLayout from "./components/directorate/layouts/DirectorateLayout";
import DirectorateDashboard from "./pages/directorate/Dashboard";
import CalculationSheet from "./pages/directorate/CalculationSheet";
import RuleConfiguration from "./pages/directorate/RuleConfiguration";
import SanctionPreparation from "./pages/directorate/SanctionPreparation";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unit-register" element={<UnitRegister />} />

          {/* Admin Panle */}
          <Route path="/admin" element={<AdminLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schemes/available-schemes" element={<AvailableSchemes />} />
            <Route path="users" element={<User />} />
            <Route path="unit/unit-management" element={<UnitManagement />} />
            <Route path="unit/unit-registration" element={<UnitRegistration />} />
            <Route path="add-incentive-schemes" element={<AddIncentiveScheme />} />
            <Route path="incentive-schemes-application" element={<IncentiveApplicationForm />} />
            <Route path="my-application" element={<ApplicationList />} />
            <Route path="schemes/scheme-application/:id/form" element={<SchemeApplicationForm />} />
            <Route path="progress-reporting" element={<ProgressReporting />} />
            <Route path="market-place" element={<Marketplace />} />
            <Route path="grievance" element={<Grievance />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>

          <Route path="/dic" element={<DicAdminLayout />}>
            <Route path="dashboard" element={<DicDashboard />} />
            <Route path="verification-queue" element={<VerificationQueue />} />
            <Route path="commencement-queue" element={<CommencementQueue />} />
            <Route path="directorate-review" element={<DirectorateReview />} />
            <Route path="slc-commencement-authentication" element={<SLCCommencement />} />
            <Route path="authentication-certificate" element={<AuthenticationCertificate />} />
            <Route path="my-profile" element={<DICProfile />} />
          </Route>

          <Route path="/directorate" element={<DirectorateLayout />}>
            <Route path="dashboard" element={<DirectorateDashboard />} />
            <Route path="calculation-sheets" element={<CalculationSheet />} />
            <Route path="rule-configuration" element={<RuleConfiguration />} />
            <Route path="sanction-preparation" element={<SanctionPreparation />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
