import { Eye, FileText, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SlcDashboard = () => {
    // Mock Data based on requirements
    const kpiData = {
        pending: 5,
        approved: 12,
        rejected: 3
    };

    const applications = [
        {
            id: "APP-2024-001",
            unitName: "Arunachal Agro Tech",
            scheme: "PMEGP",
            directorateRecommendation: "Recommended",
            financialImpact: "₹ 15,00,000",
            status: "SLC_REVIEW"
        },
        {
            id: "APP-2024-002",
            unitName: "Himalaya Handlooms",
            scheme: "MMS",
            directorateRecommendation: "Recommended with Cond.",
            financialImpact: "₹ 8,50,000",
            status: "SLC_REVIEW"
        },
        {
            id: "APP-2024-005",
            unitName: "Itanagar Food Processing",
            scheme: "PMFME",
            directorateRecommendation: "Recommended",
            financialImpact: "₹ 25,00,000",
            status: "SLC_REVIEW"
        }
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">SLC Dashboard</h1>

            {/* A. KPI Summary Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Pending Tile */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Pending Approval</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">{kpiData.pending}</h3>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-full">
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                </div>

                {/* Approved Tile */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Approved (This Period)</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">{kpiData.approved}</h3>
                    </div>
                    <div className="p-3 bg-green-50 rounded-full">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>

                {/* Rejected Tile */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Rejected (This Period)</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">{kpiData.rejected}</h3>
                    </div>
                    <div className="p-3 bg-red-50 rounded-full">
                        <XCircle className="w-8 h-8 text-red-500" />
                    </div>
                </div>
            </div>

            {/* B. Application Queue */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-600" />
                        Pending Applications Queue
                    </h2>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                        {applications.length} Items to Review
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                                <th className="p-4 font-semibold border-b">Application ID</th>
                                <th className="p-4 font-semibold border-b">Unit Name</th>
                                <th className="p-4 font-semibold border-b">Scheme</th>
                                <th className="p-4 font-semibold border-b">Directorate Rec.</th>
                                <th className="p-4 font-semibold border-b text-center">Financial Impact</th>
                                <th className="p-4 font-semibold border-b text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-indigo-600">
                                        <Link to={`/slc/application/${app.id}`} className="hover:underline">
                                            {app.id}
                                        </Link>
                                    </td>
                                    <td className="p-4 text-gray-800">{app.unitName}</td>
                                    <td className="p-4 text-gray-600">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                                            {app.scheme}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">{app.directorateRecommendation}</td>
                                    <td className="p-4 text-gray-800 font-medium text-center">{app.financialImpact}</td>
                                    <td className="p-4 text-center">
                                        <Link
                                            to={`/slc/application/${app.id}`}
                                            className="inline-flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition-colors shadow-sm"
                                        >
                                            <Eye className="w-3 h-3" />
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {applications.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No pending applications for review.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SlcDashboard;