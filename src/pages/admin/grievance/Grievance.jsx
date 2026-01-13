import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Upload, Phone, Mail, Clock } from "lucide-react";
import { toast } from "react-toastify";

const Grievance = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    useEffect(() => {
        setPageTitle("Grievance Lodging");
        setPageSubTitle("FSD Ref: FR-11 | Purpose: External user submits grievance");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Application submitted successfully!");
    };

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                {/* <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Grievance</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                    {/* ================= GRIEVANCE DETAILS ================= */}
                    <div className="bg-white rounded-xl ">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">
                            GRIEVANCE DETAILS
                        </h3>

                        <div className="mt-6 space-y-6">

                            {/* Grievance Category */}
                            <FormField label="Grievance Category" mandatory>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                />
                                <p className="text-xs text-gray-500 mt-1">Mandatory field</p>
                            </FormField>

                            {/* Related Application ID */}
                            <FormField label="Related Application ID" mandatory>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Populated with user's applications
                                </p>
                            </FormField>

                            {/* Subject */}
                            <FormField label="Subject" mandatory>
                                <input
                                    type="text"
                                    maxLength={150}
                                    placeholder="Brief summary of your grievance"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Mandatory field (Max 150 characters)
                                </p>
                            </FormField>

                            {/* Description */}
                            <FormField label="Description" mandatory>
                                <textarea
                                    rows="5"
                                    placeholder="Please provide detailed information about your grievance, including relevant dates, reference numbers, and any actions you've already taken..."
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Mandatory field – Please provide complete details
                                </p>
                            </FormField>

                            {/* Supporting Document */}
                            <FormField label="Supporting Document" optional>
                                <label className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        className="hidden"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />

                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 mb-3">
                                        <Upload className="w-5 h-5 text-orange-600" />
                                    </div>

                                    <p className="text-sm text-orange-600 font-medium">
                                        Click to upload
                                        <span className="text-gray-500 font-normal">
                                            {" "}or drag and drop
                                        </span>
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        PDF, DOC, JPG, PNG (Max 5MB)
                                    </p>

                                    {file && (
                                        <p className="text-xs text-green-600 mt-2">
                                            {file.name}
                                        </p>
                                    )}
                                </label>

                                <p className="text-xs text-gray-500 mt-2">
                                    Optional – Attach any supporting documents (screenshots, PDFs, etc.)
                                </p>
                            </FormField>

                            {/* Actions */}
                            <div className="flex justify-end gap-4 pt-4">
                                {/* <button className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100">
                                    Clear Form
                                </button> */}
                                <button onClick={handleSubmit} className="px-5 py-2 rounded-md bg-orange-600 text-white shadow hover:bg-orange-700">
                                    Submit Grievance
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* ================= NEED HELP ================= */}
                    <div className="bg-white rounded-xl ">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">
                            Need Immediate Assistance?
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-orange-600" />
                                <div>
                                    <p className="text-gray-600">Helpline</p>
                                    <p className="text-orange-600 font-medium">1800-XXX-XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-orange-600" />
                                <div>
                                    <p className="text-gray-600">Email</p>
                                    <p className="text-orange-600 font-medium">
                                        grievance@doi.gov.in
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-orange-600" />
                                <div>
                                    <p className="text-gray-600">Working Hours</p>
                                    <p className="text-orange-600 font-medium">
                                        Mon–Fri, 9 AM – 6 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Grievance;

/* ================= HELPERS ================= */

function FormField({ label, children, mandatory, optional }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label}
                {mandatory && <span className="text-orange-500"> *</span>}
                {optional && (
                    <span className="text-gray-400 text-xs"> (Optional)</span>
                )}
            </label>
            <div className="mt-1">{children}</div>
        </div>
    );
}
