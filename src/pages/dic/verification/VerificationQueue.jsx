import React from "react";

const VerificationQueue = () => {
    const data = [
        {
            appId: "REG-2025-1001",
            unitName: "Alpine Crafts",
            date: "2025-11-20",
            form: "Uploaded",
            district: "Tawang",
            status: "Submitted",
            sla: 10,
        },
        {
            appId: "REG-2025-1002",
            unitName: "Himalayan Foods",
            date: "2025-11-20",
            form: "Not Uploaded",
            district: "Itanagar",
            status: "Returned",
            sla: -2,
        },
    ];

    return (
        <>

            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                <h3 className="text-lg font-semibold pb-1">Commencement Verification Queue — DIC Officer</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    <div>
                        <p className="text-sm text-gray-500">
                            List of declarations awaiting DIC scrutiny.
                        </p>
                    </div>
                    {/* <p className="text-sm text-gray-600 mt-2 sm:mt-0">
                        Role: <span className="font-medium">Applicant</span>
                    </p> */}
                </div>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-left text-sm text-gray-600">
                            <th className="p-2">App ID</th>
                            <th className="p-2">Unit Name</th>
                            <th className="p-2">Actual Date</th>
                            <th className="p-2">Form X/XI</th>
                            <th className="p-2">District</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">SLA Remaining</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
                                <td className="p-2 text-orange-600 font-medium cursor-pointer">
                                    {row.appId}
                                </td>
                                <td className="p-2">{row.unitName}</td>
                                <td className="p-2">{row.date}</td>
                                <td className="p-2">{row.form}</td>
                                <td className="p-2">{row.district}</td>
                                <td className="p-2">
                                    <span
                                        className={`p-2 rounded-full text-xs font-medium ${row.status === "Submitted"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td
                                    className={`p-2 font-medium ${row.sla < 0 ? "text-red-600" : "text-gray-800"
                                        }`}
                                >
                                    {row.sla}
                                </td>
                                <td className="p-2">
                                    <button className="px-3 py-1.5 bg-orange-200 hover:bg-orange-300 text-orange-700 rounded-md text-sm">
                                        Verify
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:ring-orange-500 focus:bg-orange-50">
                            <option >District</option>
                            <option>District1</option>
                            <option>District2</option>
                        </select>

                        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:ring-orange-500 focus:bg-orange-50">
                            <option>Status</option>
                        </select>

                        <input type="date" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:ring-orange-500 focus:bg-orange-50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
                        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:ring-orange-500 focus:bg-orange-50">
                            <option>Incentive / Subsidy</option>
                        </select>

                        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:ring-orange-500 focus:bg-orange-50">
                            <option>Red Flag</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerificationQueue;
