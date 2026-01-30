import { ArrowLeft, Download, Eye, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../../components/common/StatusBadge";
import { useState } from "react";

const TotalRegistration = () => {

    const navigate = useNavigate();
    const [openReject, setOpenReject] = useState(false);
    const [remarks, setRemarks] = useState("");

    const data = [
        {
            unitId: "UNIT-2025-001",
            unitName: "ABC Private Manufactoring Pvt Ltd",
            location: "New Delhi",
            constitutionType: "Private Limited Company",
            gstNumber: "12AGBVFFDF232JSD",
            udyogNumber: "UDYAM-AR-01-0012345",
            registrationDate: "1 Dec 2025",
            status: "pending"
        },
        {
            unitId: "UNIT-2025-002",
            unitName: "ABC Private Manufactoring Pvt Ltd",
            location: "Tawang",
            constitutionType: "Private Limited Company",
            gstNumber: "12AGBVFFD24234234",
            udyogNumber: "UDYAM-AP-01-0012341",
            registrationDate: "15 Aug 2025",
            status: "rejected"
        },
        {
            unitId: "UNIT-2025-003",
            unitName: "Manufactoring Pvt Ltd",
            location: "Tawang",
            constitutionType: "Private Limited Company",
            gstNumber: "12AGBVFFD24234234",
            udyogNumber: "UDYAM-AP-01-0012342",
            registrationDate: "20 Jan 2025",
            status: "approved"
        },
        {
            unitId: "UNIT-2025-004",
            unitName: "XYZ Private Manufactoring Pvt Ltd",
            location: "Tawang",
            constitutionType: "Private Limited Company",
            gstNumber: "12AGBVFFD24234234",
            udyogNumber: "UDYAM-AP-01-0012343",
            registrationDate: "09 Nov 2025",
            status: "approved"
        },
    ];

    return (
        <>

            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                <div className="flex items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        Total No. of Application for Unit Registration
                    </h3>

                    <button
                        onClick={() => navigate(-1)}
                        className="ml-auto p-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-md"
                        title="Back"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </div>



                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-left text-sm text-gray-600">
                            <th className="p-2">Unit ID</th>
                            <th className="p-2">Unit Name</th>
                            <th className="p-2">Location</th>
                            <th className="p-2">Constitution Type</th>
                            <th className="p-2">GST Number</th>
                            <th className="p-2">Udyog Number</th>
                            <th className="p-2">Registration Date</th>
                            {/* <th className="p-2">Status</th> */}
                            <th className="p-2 w-32">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
                                <td className="p-2 text-orange-600 font-medium cursor-pointer">
                                    {row.unitId}
                                </td>
                                <td className="p-2">{row.unitName}</td>
                                <td className="p-2">{row.location}</td>
                                <td className="p-2">{row.constitutionType}</td>
                                <td className="p-2">{row.gstNumber}</td>
                                <td className="p-2">{row.udyogNumber}</td>
                                <td className="p-2">{row.registrationDate}</td>
                                {/* <td className="p-2">
                                    <StatusBadge status={row.status} />
                                </td> */}
                                <td className="p-2">
                                    <button 
                                        onClick={() => navigate("/dic/registered-application/view/" + row.unitId)}
                                        title="View Application Details" 
                                        className="p-2 rounded-md hover:bg-blue-100 text-blue-600"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    {/* <button title="Download Application" className="p-2 rounded-md hover:bg-green-100 text-green-600">
                                        <Download className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => setOpenReject(true)} title="Reject Application" className="p-2 rounded-md hover:bg-red-100 text-red-600">
                                        <XCircle className="w-5 h-5" />
                                    </button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {openReject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Reject Application
                            </h3>

                            <textarea
                                rows={4}
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Enter rejection remarks..."
                                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            />

                            <div className="flex justify-end gap-3 mt-5">
                                <button
                                    onClick={() => setOpenReject(false)}
                                    className="px-4 py-2 text-sm bg-orange-100 hover:bg-orange-200 rounded-md"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => {
                                        if (!remarks.trim()) {
                                            alert("Remarks are required");
                                            return;
                                        }

                                        console.log("Rejected with remarks:", remarks);

                                        setOpenReject(false);
                                        setRemarks("");
                                    }}
                                    className="px-4 py-2 text-sm bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                                >
                                    Reject
                                </button>
                            </div>

                        </div>
                    </div>
                )}


            </div>
        </>
    );
}

export default TotalRegistration;
