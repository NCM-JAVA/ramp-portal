import { XCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const SlcRejectedApplications = () => {
    // Mock Data for Rejected
    const applications = [
        {
            id: "APP-2023-045",
            unitName: "Ziro Valley Fruits",
            scheme: "PMFME",
            rejectionDate: "15-Jan-2024",
            reason: "Incomplete Documentation",
            status: "REJECTED"
        }
    ];

    return (
        <div className="container mx-auto max-w-6xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Rejected Applications</h1>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        Rejected List
                    </h2>
                    <span className="text-xs font-semibold bg-red-50 text-red-700 px-3 py-1 rounded-full">
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
                                <th className="p-4 font-semibold border-b">Rejection Date</th>
                                <th className="p-4 font-semibold border-b">Reason</th>
                                <th className="p-4 font-semibold border-b text-center">Status</th>
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
                                    <td className="p-4 text-gray-600">{app.rejectionDate}</td>
                                    <td className="p-4 text-red-600 font-medium">{app.reason}</td>
                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                                            <XCircle className="w-3 h-3" /> Rejected
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <Link
                                            to={`/slc/application/${app.id}`}
                                            className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                                        >
                                            <FileText className="w-4 h-4" />
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

export default SlcRejectedApplications;
