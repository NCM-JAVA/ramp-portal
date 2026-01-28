import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FileText, CheckCircle, XCircle, AlertCircle, ChevronRight, Download, Eye } from "lucide-react";

const SlcApplicationView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // State
    const [status, setStatus] = useState("PENDING"); // PENDING, APPROVED, REJECTED
    const [decision, setDecision] = useState("");
    const [sanctionAmount, setSanctionAmount] = useState("");
    const [remarks, setRemarks] = useState("");
    const [errors, setErrors] = useState({});
    const [isSigned, setIsSigned] = useState(false);

    // Mock Data based on ID for demo purposes
    useEffect(() => {
        if (id === 'APP-2023-089' || id === 'APP-2023-095') {
            setStatus("APPROVED");
            setSanctionAmount("12,00,000");
        } else if (id === 'APP-2023-045') {
            setStatus("REJECTED");
        } else {
            setStatus("PENDING");
        }
    }, [id]);

    const applicationData = {
        id: id,
        unitName: "Arunachal Agro Tech",
        scheme: "PMEGP",
        appliedAmount: "₹ 20,00,000",
        directorateRemarks: "The unit has successfully completed all compliance checks. Site inspection report is positive. Recommended for sanction.",
        recommendedAmount: "1500000",
        complianceStatus: status === "REJECTED" ? "Issues Found" : "Verified & Compliant",
        documents: [
            { name: "Project Report", status: "Valid" },
            { name: "Land Documents", status: status === "REJECTED" ? "Invalid" : "Valid" }, // Mocking one invalid
            { name: "NOC", status: "Valid" },
            { name: "Bank Appraisal", status: status === "REJECTED" ? "Invalid" : "Valid" } // Mocking another invalid
        ],
        approvalDate: "20 Jan 2024",
        rejectionReason: "Incomplete financial documentation and land dispute identified."
    };

    const validate = () => {
        const newErrors = {};
        if (!decision) newErrors.decision = "Please select a decision.";
        if (decision === "Approve" && !sanctionAmount) newErrors.sanctionAmount = "Sanction amount is required.";
        if (decision === "Approve" && Number(sanctionAmount) <= 0) newErrors.sanctionAmount = "Invalid amount.";
        if (!remarks.trim()) newErrors.remarks = "Final remarks are mandatory.";
        if (!isSigned) newErrors.signature = "Digital signature is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log({
                id,
                decision,
                sanctionAmount: decision === "Approve" ? sanctionAmount : 0,
                remarks,
                isSigned
            });
            navigate("/slc/approval-confirmation");
        }
    };

    const handleSign = () => {
        setIsSigned(true);
        setErrors(prev => ({ ...prev, signature: null }));
    };

    return (
        <div className="container mx-auto max-w-6xl">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="cursor-pointer hover:text-indigo-600" onClick={() => navigate("/slc/dashboard")}>Dashboard</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-semibold text-gray-800">Application Review: {id}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Review Summary (Read-Only) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-600" />
                                Consolidated Review Summary
                            </h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                                ${status === "APPROVED" ? "bg-green-100 text-green-700" :
                                    status === "REJECTED" ? "bg-red-100 text-red-700" :
                                        "bg-blue-100 text-blue-700"}`}>
                                {status === "APPROVED" ? "Approved" : status === "REJECTED" ? "Rejected" : "Under Review"}
                            </span>
                        </div>

                        <div className="p-6 grid gap-6">
                            {/* Application Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Unit Name</p>
                                    <p className="font-semibold text-gray-800 text-lg">{applicationData.unitName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Scheme</p>
                                    <p className="font-semibold text-gray-800">{applicationData.scheme}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Applied Amount</p>
                                    <p className="font-semibold text-gray-800">{applicationData.appliedAmount}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Rec. Amount by Directorate</p>
                                    <p className="font-bold text-indigo-600 text-lg">₹ {Number(applicationData.recommendedAmount).toLocaleString()}</p>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Directorate Remarks */}
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium mb-2">Directorate Remarks</p>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-gray-700 text-sm italic">
                                    "{applicationData.directorateRemarks}"
                                </div>
                            </div>

                            {/* Documents */}
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium mb-2">Verified Documents</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {applicationData.documents.map((doc, idx) => (
                                        <div key={idx} className={`flex items-center justify-between p-3 rounded-lg border transition-all
                                            ${doc.status === "Invalid" ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}>

                                            <div className="flex items-center gap-3">
                                                {doc.status === "Invalid" ? (
                                                    <XCircle className="w-5 h-5 text-red-500" />
                                                ) : (
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                )}
                                                <div>
                                                    <p className={`text-sm font-semibold ${doc.status === "Invalid" ? "text-red-800" : "text-green-800"}`}>
                                                        {doc.name}
                                                    </p>
                                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                                                        {doc.status === "Invalid" ? "Invalid" : "Verified"}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => window.open('#', '_blank')}
                                                className="p-2 bg-white rounded-full text-indigo-600 shadow-sm border border-indigo-100 hover:bg-indigo-50 hover:scale-105 transition-transform"
                                                title="View Document"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Dynamic Panel based on Status */}
                <div className="lg:col-span-1">
                    {/* CASE 1: APPROVED STATUS - SHOW SUMMARY */}
                    {status === "APPROVED" && (
                        <div className="bg-white rounded-xl shadow-lg border border-green-200 sticky top-6 overflow-hidden">
                            <div className="bg-green-600 px-6 py-4 text-white">
                                <h2 className="text-lg font-bold flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> Application Approved
                                </h2>
                                <p className="text-green-100 text-sm opacity-90">Decision finalized on {applicationData.approvalDate}</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="text-center py-4 bg-green-50 rounded-lg border border-green-100">
                                    <p className="text-sm text-green-700 font-medium uppercase mb-1">Sanctioned Amount</p>
                                    <p className="text-3xl font-bold text-green-800">₹ {applicationData.recommendedAmount}</p>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p className="font-semibold mb-1">SLC Remarks:</p>
                                    <p className="italic">"Approved based on strong financial health and complete documentation. Sanction order generated."</p>
                                </div>
                                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                                    <Download className="w-4 h-4" /> Download Sanction Order
                                </button>
                            </div>
                        </div>
                    )}

                    {/* CASE 2: REJECTED STATUS - SHOW SUMMARY */}
                    {status === "REJECTED" && (
                        <div className="bg-white rounded-xl shadow-lg border border-red-200 sticky top-6 overflow-hidden">
                            <div className="bg-red-600 px-6 py-4 text-white">
                                <h2 className="text-lg font-bold flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Application Rejected
                                </h2>
                                <p className="text-red-100 text-sm opacity-90">Decision finalized on {applicationData.approvalDate}</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="py-3 px-4 bg-red-50 rounded-lg border border-red-100 text-red-800">
                                    <p className="text-sm font-bold uppercase mb-1">Rejection Reason</p>
                                    <p className="text-sm">{applicationData.rejectionReason}</p>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p className="font-semibold mb-1">SLC Remarks:</p>
                                    <p className="italic">"The submitted financials do not meet the minimum eligibility criteria for the PMEGP scheme."</p>
                                </div>
                                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300 text-sm font-medium">
                                    View Rejection Letter
                                </button>
                            </div>
                        </div>
                    )}

                    {/* CASE 3: PENDING STATUS - SHOW DECISION FORM */}
                    {status === "PENDING" && (
                        <div className="bg-white rounded-xl shadow-lg border border-indigo-100 sticky top-6">
                            <div className="bg-indigo-600 px-6 py-4 rounded-t-xl text-white">
                                <h2 className="text-lg font-bold">Final Decision Panel</h2>
                                <p className="text-indigo-100 text-sm opacity-90">Take final action on this application</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Decision */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">SLC Decision <span className="text-red-500">*</span></label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className={`
                                            cursor-pointer border rounded-lg p-3 flex flex-col items-center gap-2 transition-all
                                            ${decision === "Approve" ? "bg-green-50 border-green-500 ring-1 ring-green-500" : "bg-white border-gray-200 hover:border-green-300"}
                                        `}>
                                            <input
                                                type="radio"
                                                name="decision"
                                                value="Approve"
                                                checked={decision === "Approve"}
                                                onChange={(e) => setDecision(e.target.value)}
                                                className="sr-only"
                                            />
                                            <CheckCircle className={`w-6 h-6 ${decision === "Approve" ? "text-green-600" : "text-gray-400"}`} />
                                            <span className={`text-sm font-medium ${decision === "Approve" ? "text-green-700" : "text-gray-600"}`}>Approve</span>
                                        </label>

                                        <label className={`
                                            cursor-pointer border rounded-lg p-3 flex flex-col items-center gap-2 transition-all
                                            ${decision === "Reject" ? "bg-red-50 border-red-500 ring-1 ring-red-500" : "bg-white border-gray-200 hover:border-red-300"}
                                        `}>
                                            <input
                                                type="radio"
                                                name="decision"
                                                value="Reject"
                                                checked={decision === "Reject"}
                                                onChange={(e) => setDecision(e.target.value)}
                                                className="sr-only"
                                            />
                                            <XCircle className={`w-6 h-6 ${decision === "Reject" ? "text-red-600" : "text-gray-400"}`} />
                                            <span className={`text-sm font-medium ${decision === "Reject" ? "text-red-700" : "text-gray-600"}`}>Reject</span>
                                        </label>
                                    </div>
                                    {errors.decision && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.decision}</p>}
                                </div>

                                {/* Sanction Amount (Conditional) */}
                                {decision === "Approve" && (
                                    <div className="animate-fadeIn">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Sanction Amount (₹) <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-gray-500 font-medium">₹</span>
                                            <input
                                                type="number"
                                                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                                placeholder="Enter Amount"
                                                value={sanctionAmount}
                                                onChange={(e) => setSanctionAmount(e.target.value)}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Recommended: ₹ {Number(applicationData.recommendedAmount).toLocaleString()}</p>
                                        {errors.sanctionAmount && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.sanctionAmount}</p>}
                                    </div>
                                )}

                                {/* Remarks */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Final Remarks <span className="text-red-500">*</span></label>
                                    <textarea
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
                                        rows="4"
                                        placeholder="Enter your comments here..."
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                    ></textarea>
                                    {errors.remarks && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.remarks}</p>}
                                </div>

                                {/* Digital Signature */}
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm font-semibold text-gray-700">Digital Signature <span className="text-red-500">*</span></label>
                                        {isSigned && <span className="text-green-600 text-xs font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Signed</span>}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleSign}
                                        disabled={isSigned}
                                        className={`w-full py-2 rounded-lg border-2 border-dashed font-medium text-sm transition-all flex items-center justify-center gap-2
                                            ${isSigned
                                                ? "bg-green-50 border-green-400 text-green-700 cursor-default"
                                                : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                                            }
                                        `}
                                    >
                                        {isSigned ? "Digitally Signed by SLC Member" : "Click to e-Sign Document"}
                                    </button>
                                    {errors.signature && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.signature}</p>}
                                </div>

                                {/* Action Buttons */}
                                <button
                                    type="submit"
                                    className={`w-full py-3 rounded-lg text-white font-bold shadow-md transition-all transform active:scale-95
                                        ${decision === "Reject" ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"}
                                    `}
                                >
                                    {decision === "Reject" ? "Confirm Rejection" : "Sanction & Approve"}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SlcApplicationView;