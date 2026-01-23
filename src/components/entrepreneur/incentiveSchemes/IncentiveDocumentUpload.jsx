import { X, Upload, FileText } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import FormIVModal from "./FormIVModal";

const IncentiveDocumentUpload = ({ onClose }) => {
    const documents = [
        { name: "Land Document (LAO/LPC/Lease)", type: "upload" },
        { name: "Load Sanction Order (Power)", type: "upload" },
        { name: "NOC from Pollution Control Board", type: "upload" },
        { name: "Form IV (Statement of Plant & Machinery)", type: "form" },
        { name: "CA Certificate (Form XII)", type: "upload" },
        { name: "Bills/Vouchers (Consolidated PDF)", type: "upload" },
        { name: "First Raw Material Purchase Bill", type: "upload" },
    ];


    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    const [showFormModal, setShowFormModal] = useState(false);
    const fileInputRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState({});

    const handleUploadClick = (index) => {
        setCurrentIndex(index);
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file || currentIndex === null) return;

        setSelectedFiles((prev) => ({
            ...prev,
            [currentIndex]: file,
        }));

        // Optional: upload immediately
        // uploadFile(file, currentIndex);

        e.target.value = "";
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">

                <div className="flex justify-between items-center bg-green-600 text-white px-4 py-3">
                    <h2 className="text-sm sm:text-base font-semibold">
                        Dynamic Document Lists (Pop-up Content)
                    </h2>
                    <button onClick={onClose}>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-4 space-y-4">

                    <div className="bg-gray-50 p-3 rounded">
                        <label className="text-sm font-medium text-gray-700">Application Type</label>

                        <div className="flex items-center gap-6 mt-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="document_category"
                                    value="Stamp Duty Reimbursement"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Stamp Duty Reimbursement</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="document_category"
                                    value="Capital Investment Incentive"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Capital Investment Incentive</span>
                            </label>
                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-2 py-2 w-16">Sr. No.</th>
                                    <th className="border px-2 py-2 text-left">Document Name</th>
                                    <th className="border px-2 py-2 w-40">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {documents.map((doc, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-2 py-2 text-center">
                                            {index + 1}
                                        </td>

                                        <td className="border px-2 py-2">
                                            {doc.name}
                                        </td>

                                        <td className="border px-2 py-2 text-center">
                                            {doc.type === "upload" ? (
                                                <>
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        onChange={handleFileChange}
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                        className="hidden"
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() => handleUploadClick(index)}
                                                        className="
                                                            inline-flex items-center gap-2
                                                            bg-blue-600 hover:bg-blue-700
                                                            text-white text-sm font-medium
                                                            px-4 py-1.5 rounded-md
                                                            shadow
                                                        "
                                                    >
                                                        <Upload className="h-4 w-4" />
                                                        Upload
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setShowFormModal(true)}
                                                    className="
                                                        inline-flex items-center gap-2
                                                        bg-green-600 hover:bg-green-700
                                                        text-white text-sm font-medium
                                                        px-4 py-1.5 rounded-md
                                                        shadow
                                                    "
                                                >
                                                    <FileText className="h-4 w-4" />
                                                    Fill Form
                                                </button>
                                            )}

                                            {selectedFiles[index] && (
                                                <p className="text-xs text-green-600 truncate max-w-[140px] mx-auto">
                                                    {selectedFiles[index].name}
                                                </p>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className="flex justify-end gap-3 px-4 py-3 border-t">
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center gap-2
                            bg-gradient-to-r from-red-500 to-red-600
                            hover:from-red-600 hover:to-red-700
                            text-white font-semibold py-2 px-4
                            rounded-lg shadow
                            transition-all duration-300 ease-in-out"
                    >
                        Cancel
                    </button>
                    <button className="flex items-center justify-center gap-2
                        bg-gradient-to-r from-green-500 to-green-600
                        hover:from-green-600 hover:to-green-700
                        text-white font-semibold py-2 px-4
                        rounded-lg shadow
                        transition-all duration-300 ease-in-out">
                        Submit Documents
                    </button>
                </div>
            </div>

            {showFormModal && (
                <FormIVModal onClose={() => setShowFormModal(false)} />
            )}

        </div>
    );
};

export default IncentiveDocumentUpload;