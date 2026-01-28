import { FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SlcApplicationsForFinalApproval = () => {
    // Mock Data for Applications Pending Final Approval
    const applications = [
        {
            id: "APP-2024-101",
            unitName: "Eastern Textiles",
            scheme: "PMEGP",
            directorateRec: "Recommended",
            financialImpact: "₹ 18,00,000",
            submissionDate: "25-Jan-2024",
            status: "FINAL_REVIEW"
        },
        {
            id: "APP-2024-105",
            unitName: "Green Valley Agro",
            scheme: "MMS",
            directorateRec: "Recommended",
            financialImpact: "₹ 10,00,000",
            submissionDate: "26-Jan-2024",
            status: "FINAL_REVIEW"
        }
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Applications for Final Approval</h1>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-600" />
                        Awaiting Final Decision
                    </h2>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                        {applications.length} Items
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
                                    <td className="p-4 text-gray-600">{app.directorateRec}</td>
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
            </div>
        </div>
    );
};

export default SlcApplicationsForFinalApproval;
