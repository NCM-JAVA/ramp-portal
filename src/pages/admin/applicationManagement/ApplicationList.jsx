import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatusBadge from "../../../components/admin/common/StatusBadge";
import { Edit, Eye, Trash2 } from "lucide-react";

const ApplicationList = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const [openViewModal, setOpenViewModal] = useState(false);

    useEffect(() => {
        setPageTitle("My Application");
        setPageSubTitle("Track your application status");
        setBackButton(null);
        setActionButton(null);
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

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
                                        <button onClick={() => setOpenViewModal(true)} className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                                            <Eye className="w-5 h-5" />
                                        </button>

                                        {/* <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                                            <Edit className="w-5 h-5" />
                                        </button>

                                        <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                                            <Trash2 className="w-5 h-5" />
                                        </button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {openViewModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">

                        {/* ===== Header ===== */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
                            <h2 className="text-lg font-semibold text-white">
                                View Details
                            </h2>
                            <button
                                onClick={() => setOpenViewModal(false)}
                                className="text-white hover:text-blue-200 text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* ===== Body ===== */}
                        <div className="px-6 py-4 text-sm text-gray-700 grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium">Application ID</p>
                                <p>APP-2025-000123</p>
                            </div>

                            <div>
                                <p className="font-medium">Applicant Name</p>
                                <p>Rajesh Kumar</p>
                            </div>

                            <div>
                                <p className="font-medium">Application Type</p>
                                <p >Incentive Claim</p>
                            </div>

                            <div>
                                <p className="font-medium">Contact Number</p>
                                <p >+91 7898754657</p>
                            </div>
                            <div>
                                <p className="font-medium"> Unit Name</p>
                                <p >Himalayan Agro Unit</p>
                            </div>
                            <div>
                                <p className="font-medium">Email Address</p>
                                <p >rajesh@himalayan-agro.com</p>
                            </div>
                            <div>
                                <p className="font-medium">Scheme</p>
                                <p >Capital Investment Subsidy</p>
                            </div>
                            <div>
                                <p className="font-medium">Address</p>
                                <p >Industrial Area, Itanagar, Arunachal Pradesh</p>
                            </div>
                            <div>
                                <p className="font-medium">Submission Date</p>
                                <p >12 Jan 2025</p>
                            </div>
                            <div>
                                <p className="font-medium"> Claim Amount</p>
                                <p >Rs 15,00,000</p>
                            </div>
                            <div>
                                <p className="font-medium"> Status</p>
                                <p ><StatusBadge status="under_security" /></p>
                            </div>

                        </div>


                        {/* ===== Footer ===== */}
                        <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">

                            <div className=" text-sm text-gray-700 max-w-[70%]">
                                <div>
                                    <p className="font-medium">Submitted Documents</p>
                                    <p>Investment Proof, Bank Statement, Registration Certificate</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setOpenViewModal(false)}
                                    className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100"
                                >
                                    Close
                                </button>

                                <button
                                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Download PDF
                                </button>
                            </div>

                        </div>


                    </div>
                </div>
            )}

        </div>
    );
};
export default ApplicationList;