import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import StatusBadge from "../../../components/admin/common/StatusBadge";
import { Edit, Eye, Trash2 } from "lucide-react";

const ApplicationList = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();

    useEffect(() => {
        setPageTitle("My Application");
        setPageSubTitle("Track your application status");
        setBackButton(null);
        setActionButton(null);
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            {/* <div className="grid grid-cols-4 gap-4"> */}
                <form id="filterForm" className="grid grid-cols-4 gap-4">

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                        Application Type <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="applied_incentive_name"
                        placeholder="Enter name of incentive applied for"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Scheme</label>
                    <select
                        name="scheme"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select Scheme</option>
                        <option value="scheme1">Scheme 1</option>
                        <option value="scheme2">Scheme 2</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Scheme</label>
                    <select
                        name="scheme"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select Scheme</option>
                        <option value="scheme1">Scheme 1</option>
                        <option value="scheme2">Scheme 2</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Date Range</label>
                    <div className="flex gap-2">
                        <input
                            type="date"
                            name="start_date"
                            className="w-1/2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        />
                        <input
                            type="date"
                            name="end_date"
                            className="w-1/2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        />
                    </div>
                </div>

                <button
                    type="button"
                    className="
                  flex items-center justify-center gap-2
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  hover:from-blue-600 hover:to-indigo-700
                  text-white font-semibold py-2 px-4
                  rounded-lg shadow
                  transition-all duration-300 ease-in-out
                "
                onclick="document.getElementById('filterForm').reset();"
                >
                    Reset Filters
                </button>
            </form>
            {/* </div> */}

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">
                <div className="space-y-1">
                    <div class="overflow-x-auto">
                        <table class="min-w-full border-gray-300 mt-3 mb-5">
                            <thead class="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-2">Application ID</th>
                                    <th className="p-2">Application Type</th>
                                    <th className="p-2">Unit Name </th>
                                    <th className="p-2">Scheme Name</th>
                                    <th className="p-2">Submission Date</th>
                                    <th className="p-2">Current Status</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">APP-2025-000123</td>
                                    <td className="p-2">Incentive Claim</td>
                                    <td className="p-2">Himalayan Agro Unit</td>
                                    <td className="p-2">Capital Investment Subsidy</td>
                                    <td className="p-2">12 Jan 2025</td>
                                    <td className="p-2"><StatusBadge status="under_security" /></td>
                                    <td className="p-2">
                                        <button className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                                            <Eye className="w-5 h-5" />
                                        </button>

                                        <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                                            <Edit className="w-5 h-5" />
                                        </button>

                                        <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ApplicationList;