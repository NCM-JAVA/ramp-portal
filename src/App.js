import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Toaster from "./components/common/Toaster";
import AdminLayout from "./components/entrepreneur/layouts/AdminLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UnitRegister from "./pages/auth/UnitRegister";
import ApplicationList from "./pages/entrepreneur/applicationManagement/ApplicationList";
import Dashboard from "./pages/entrepreneur/Dashboard";
import Grievance from "./pages/entrepreneur/grievance/Grievance";
import AddIncentiveScheme from "./pages/entrepreneur/incentiveSchemes/AddIncentiveScheme";
import IncentiveApplicationForm from "./pages/entrepreneur/incentiveSchemes/IncentiveApplicationForm";
import Marketplace from "./pages/entrepreneur/marketPlace/MarketPlace";
import MyProfile from "./pages/entrepreneur/myProfile/MyProfile";
import Notifications from "./pages/entrepreneur/notifications/Notifications";
import ProgressReporting from "./pages/entrepreneur/progressReporting/ProgressReporting";
import AvailableSchemes from "./pages/entrepreneur/Schemes/AvailableSchemes";
import SchemeApplicationForm from "./pages/entrepreneur/Schemes/SchemeApplicationForm";
import UnitManagement from "./pages/entrepreneur/unitManagement/UnitManagement";
import UnitRegistration from "./pages/entrepreneur/unitManagement/UnitRegistration";
import User from "./pages/entrepreneur/users/User";
import NotFound from "./pages/NotFound";

import DicAdminLayout from "./components/dic/layouts/DicAdminLayout";
import AuthenticationCertificate from "./pages/dic/certificate/AuthenticateCertificate";
import CommencementQueue from "./pages/dic/commencement/CommencementQueue";
import DicDashboard from "./pages/dic/Dashboard";
import DirectorateReview from "./pages/dic/directorate/DirectorateReview";
import DICProfile from "./pages/dic/myProfile/MyProfile";
import SLCCommencement from "./pages/dic/slc/SLCCommencement";
import VerificationQueue from "./pages/dic/verification/VerificationQueue";

import RegistrationApplicationView from "./components/dic/RegistrationApplicationView";
import DirectorateLayout from "./components/directorate/layouts/DirectorateLayout";
import SlcLayout from "./components/slc/slcLayout";
import RegistrationDashboard from "./pages/dic/registration/RegistrationDashboard";
import TotalRegistration from "./pages/dic/registration/TotalRegistration";
import CalculationAuditLog from "./pages/directorate/CalculationAuditLog";
import CalculationSheet from "./pages/directorate/CalculationSheet";
import DirectorateDashboard from "./pages/directorate/Dashboard";
import RuleConfiguration from "./pages/directorate/RuleConfiguration";
import SanctionPreparation from "./pages/directorate/SanctionPreparation";
import SlcApplicationsForFinalApproval from "./pages/slc/SlcApplicationsForFinalApproval";
import SlcApplicationView from "./pages/slc/SlcApplicationView";
import SlcApprovalConfirmation from "./pages/slc/SlcApprovalConfirmation";
import SlcApprovedApplications from "./pages/slc/SlcApprovedApplications";
import SlcDashboard from "./pages/slc/SlcDashboard";
import SlcPendingApplications from "./pages/slc/SlcPendingApplications";
import SlcRejectedApplications from "./pages/slc/SlcRejectedApplications";
import SlcReports from "./pages/slc/SlcReports";

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

                    {/* Entrepreneur Panel */}
                    <Route path="/entrepreneur" element={<AdminLayout />} >
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
                        <Route path="registration-management" element={<RegistrationDashboard />} />
                        <Route path="verification-queue" element={<VerificationQueue />} />
                        <Route path="commencement-queue" element={<CommencementQueue />} />
                        <Route path="directorate-review" element={<DirectorateReview />} />
                        <Route path="slc-commencement-authentication" element={<SLCCommencement />} />
                        <Route path="authentication-certificate" element={<AuthenticationCertificate />} />
                        <Route path="my-profile" element={<DICProfile />} />

                        <Route path="registered-application" element={<TotalRegistration />} />
                        <Route path="registered-application/view/:unitId" element={<RegistrationApplicationView />} />
                    </Route>

                    <Route path="/directorate" element={<DirectorateLayout />}>
                        <Route path="dashboard" element={<DirectorateDashboard />} />
                        <Route path="calculation-sheets" element={<CalculationSheet />} />
                        <Route path="rule-configuration" element={<RuleConfiguration />} />
                        <Route path="sanction-preparation" element={<SanctionPreparation />} />
                        <Route path="calculation-audit-check" element={<CalculationAuditLog />} />
                    </Route>


                    <Route path="/slc" element={<SlcLayout />}>
                        <Route path="dashboard" element={<SlcDashboard />} />
                        <Route path="pending-applications" element={<SlcPendingApplications />} />
                        <Route path="approved-applications" element={<SlcApprovedApplications />} />
                        <Route path="rejected-applications" element={<SlcRejectedApplications />} />
                        <Route path="applications-for-final-approval" element={<SlcApplicationsForFinalApproval />} />
                        <Route path="reports" element={<SlcReports />} />
                        <Route path="application/:id" element={<SlcApplicationView />} />
                        <Route
                            path="approval-confirmation"
                            element={<SlcApprovalConfirmation />}
                        />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;