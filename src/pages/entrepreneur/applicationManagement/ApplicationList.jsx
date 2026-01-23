import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatusBadge from "../../../components/common/StatusBadge";
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
                        Registration Type <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="applied_incentive_name"
                        placeholder="Enter name of incentive applied for"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Incentive/Subsidy</label>
                    <select
                        name="scheme"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="">Select Incentive/Subsidy</option>
                        <option value="scheme1">Incentive/Subsidy 1</option>
                        <option value="scheme2">Incentive/Subsidy 2</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Date Range</label>
                    <div className="flex gap-2">
                        <input
                            type="date"
                            name="start_date"
                            className="w-1/2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        />
                        <input
                            type="date"
                            name="end_date"
                            className="w-1/2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        />
                    </div>
                </div>

                <div className="flex flex-col h-full">
                    <div className="flex-1" />
                    <button
                        type="button"
                        onClick={() => document.getElementById("filterForm").reset()}
                        className="
                            h-[42px] w-full
                            flex items-center justify-center
                            bg-gradient-to-r from-orange-500 to-orange-600
                            hover:from-orange-600 hover:to-orange-700
                            text-white font-semibold
                            rounded-lg shadow
                            transition-all duration-300
                        "
                    >
                        Reset Filters
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">
                <div className="mt-4 mb-2 p-4 rounded-lg border border-orange-300 bg-orange-50 text-orange-800 text-sm flex gap-2">
                    <span className="font-semibold">Note:</span>
                    <span>
                        Applicant can withdraw the application only while it is under
                        <b> DIC</b>. Once the application is moved to
                        <b> Directorate</b>, withdrawal is not permitted.
                    </span>
                </div>

                <div className="space-y-1">
                    <div class="overflow-x-auto">
                        <table class="min-w-full border-gray-300 mt-3 mb-5">
                            <thead class="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-2">Registration ID</th>
                                    <th className="p-2">Registration Type</th>
                                    <th className="p-2">Unit Name </th>
                                    <th className="p-2">Incentive/Subsidy Name</th>
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
                                    <td className="p-2"><StatusBadge status="under_scrutiny" /></td>
                                    <td className="p-2">
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <button
                                                onClick={() => setOpenViewModal(true)}
                                                className="h-10 w-10 flex items-center justify-center
                                                rounded-lg text-orange-600
                                                hover:bg-orange-100 transition"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>

                                            <button
                                                className="h-10 px-4 flex items-center justify-center
                                                bg-gradient-to-r from-orange-500 to-orange-600
                                                hover:from-orange-600 hover:to-orange-700
                                                text-white font-semibold
                                                rounded-lg shadow
                                                transition-all duration-300
                                                whitespace-nowrap"
                                            >
                                                Withdraw Application
                                            </button>
                                        </div>


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
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700">
                            <h2 className="text-lg font-semibold text-white">
                                View Details
                            </h2>
                            <button
                                onClick={() => setOpenViewModal(false)}
                                className="text-white hover:text-orange-200 text-xl"
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
                                    className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700"
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