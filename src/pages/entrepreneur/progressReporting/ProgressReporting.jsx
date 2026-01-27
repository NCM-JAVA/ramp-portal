import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const ProgressReporting = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();
    const [files, setFiles] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // your validations
        // if (!formData.factory_address_line_one) {
        //     toast.error("Please fill required fields!");
        //     return;
        // }
    
        // After successful submit:
        toast.success("Application submitted successfully!");
    
        // Optional: clear form
        // setFormData({});
    };


    useEffect(() => {
        setPageTitle("Progress Report Submission");
        setPageSubTitle("");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const handleFileUpload = (key, file) => {
        setFiles((prev) => ({
            ...prev,
            [key]: file,
        }));
    };

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                {/* ================= REPORT METADATA ================= */}
                <Section title="REPORT METADATA">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Project ID" value="PRJ-2025-001" disabled />
                        <Input label="Reporting Period *" placeholder="Q1 / Q2 / Q3 / Q4" />

                        <Input label="Financial Year *" placeholder="Enter financial year" />
                        <Input
                            label="Current Status"
                            value="Under Construction"
                            helper="Under Construction / Operational"
                            disabled
                        />
                    </div>
                </Section>

                {/* ================= PROGRESS METRICS ================= */}
                <Section title="PROGRESS METRICS">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Physical Progress (%)"
                            placeholder="Enter value (0-100)"
                            helper="0–100"
                        />
                        <Input
                            label="Financial Progress (%)"
                            placeholder="Enter value (0-100)"
                            helper="0–100"
                        />

                        <Input label="Expenditure this Quarter (₹) *" placeholder="Enter amount" />
                        <Input
                            label="Cumulative Expenditure (₹)"
                            value="0"
                            helper="Based on historical data"
                            disabled
                        />
                    </div>
                </Section>

                {/* ================= MILESTONE UPDATE ================= */}
                <Section title="MILESTONE UPDATE">
                    <div className="overflow-hidden rounded-lg border">
                        <div className="grid grid-cols-12 bg-gradient-to-r from-orange-500 to-orange-700 text-white text-sm font-semibold">
                            <div className="col-span-4 px-4 py-3">Milestone</div>
                            <div className="col-span-3 px-4 py-3">Status</div>
                            <div className="col-span-5 px-4 py-3">Remarks</div>
                        </div>

                        {["Civil Works (Foundation)", "Machinery Procurement"].map(
                            (item, index) => (
                                <div key={index} className="grid grid-cols-12 border-t text-sm">
                                    <div className="col-span-4 px-4 py-3">{item}</div>
                                    <div className="col-span-3 px-4 py-2">
                                        <input className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none" />
                                    </div>
                                    <div className="col-span-5 px-4 py-2">
                                        <input
                                            placeholder="Optional remarks"
                                            className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                                        />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </Section>

                {/* ================= EVIDENCE UPLOAD ================= */}
                <Section title="EVIDENCE UPLOAD">
                    <div className="space-y-4">
                        {[
                            { key: "site_photo_1", label: "Site Photo 1" },
                            { key: "site_photo_2", label: "Site Photo 2" },
                            { key: "ca_certificate", label: "CA Certificate (Expenditure)" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-2 items-center gap-4"
                            >
                                {/* Left: Label (50%) */}
                                <span className="text-sm text-gray-700">
                                    {item.label}
                                </span>

                                {/* Right: Upload (50%) */}
                                <label className="cursor-pointer w-full">
                                    <input
                                        type="file"
                                        name={item.key}
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        className="hidden"
                                        onChange={(e) =>
                                            handleFileUpload(item.key, e.target.files[0])
                                        }
                                    />

                                    {files[item.key] ? (
                                        <span className="block w-full px-4 py-2 text-sm text-green-600 font-medium border rounded-md truncate">
                                            {files[item.key].name}
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2 w-full px-4 py-2 
                             text-sm bg-orange-50 text-orange-600 rounded-md 
                             hover:bg-orange-100">
                                            <Upload className="w-4 h-4" />
                                            Upload
                                        </span>
                                    )}
                                </label>
                            </div>
                        ))}
                    </div>
                </Section>



                {/* ================= FOOTER ================= */}
                <div className="flex justify-end pt-6">
                    <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-orange-600 text-white shadow hover:bg-orange-700">
                        Submit Report
                    </button>
                </div>

            </div>

        </>
    )

}

export default ProgressReporting;


function Section({ title, children }) {
    return (
        <div className="mb-8">

            {/* Heading */}
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">
                {title}
            </h3>

            {/* Divider – fixed height */}
            {/* <div className="mt-2 h-[2px] w-full bg-black"></div> */}

            {/* Content */}
            <div className="mt-6">
                {children}
            </div>

        </div>
    );
}


function Input({ label, value, placeholder, helper, disabled }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full p-2 border rounded text-sm sm:text-base transition focus:outline-none 
          ${disabled ? "bg-gray-100 border-gray-300 cursor-not-allowed text-gray-700" : "bg-white focus:ring-2 focus:ring-orange-500"}
          outline-none`}
            />
            {helper && (
                <p className="text-xs text-gray-500 mt-1">{helper}</p>
            )}
        </div>
    );
}