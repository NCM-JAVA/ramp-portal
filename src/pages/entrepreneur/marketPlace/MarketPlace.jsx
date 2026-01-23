import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";

const Marketplace = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();
    const [files, setFiles] = useState({});

    const handleFileUpload = (key, file) => {
        setFiles((prev) => ({ ...prev, [key]: file }));
    };

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
        setPageTitle("Digital Marketplace Listing");
        setPageSubTitle("For MSMEs to list products (Market Linkage)");
        setBackButton(null);
        setActionButton(null);
    }, []);

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">

                    {/* ================= CONTENT ================= */}
                    <div className="space-y-10">

                        {/* ================= 1. PRODUCT INFORMATION ================= */}
                        <Section title="1. PRODUCT INFORMATION">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Product Name" placeholder="Enter product name" mandatory />
                                <Input
                                    label="Product Category"
                                    value="Handloom / Food Processing / Handicraft"
                                    disabled
                                    mandatory
                                />
                            </div>

                            <div className="mt-6">
                                <Textarea
                                    label="Short Description"
                                    placeholder="Enter product description"
                                    mandatory
                                />
                            </div>

                            <div className="mt-6 max-w-md">
                                <Input
                                    label="HSN Code"
                                    placeholder="Enter HSN code"
                                    helper="Numeric / Code format"
                                />
                            </div>
                        </Section>

                        {/* ================= 2. PRICING & PRODUCTION ================= */}
                        <Section title="2. PRICING & PRODUCTION">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="Price Range (Start)"
                                    placeholder="Enter starting price"
                                    helper="Numeric"
                                />
                                <Input
                                    label="Price Range (End)"
                                    placeholder="Enter ending price"
                                    helper="Numeric"
                                />
                                <Input
                                    label="Production Capacity (Monthly)"
                                    placeholder="Enter production capacity"
                                    helper="Numeric"
                                />
                                <Input
                                    label="Unit"
                                    value="Kg / Piece / Set / Litre"
                                    disabled
                                />
                            </div>
                        </Section>

                        {/* ================= 3. MEDIA ================= */}
                        <Section title="3. MEDIA">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FileUpload
                                    label="Cover Image"
                                    file={files.cover}
                                    onChange={(file) => handleFileUpload("cover", file)}
                                />
                                <FileUpload
                                    label="Gallery Image 1"
                                    file={files.gallery1}
                                    onChange={(file) => handleFileUpload("gallery1", file)}
                                />
                                <FileUpload
                                    label="Gallery Image 2"
                                    file={files.gallery2}
                                    onChange={(file) => handleFileUpload("gallery2", file)}
                                />
                            </div>
                        </Section>

                        {/* ================= SUBMIT ================= */}
                        <div className="flex justify-start pt-4">
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2 rounded-lg bg-orange-600 text-white shadow hover:bg-orange-700"
                            >
                                Submit for Approval
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Marketplace;


/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, children }) {
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">
                {title}
            </h3>
            {/* <div className="mt-2 h-[2px] w-full bg-black"></div> */}
            <div className="mt-6">{children}</div>
        </div>
    );
}

function Input({ label, placeholder, value, helper, disabled, mandatory }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label} {mandatory && <span className="text-red-500">*</span>}
            </label>
            <input
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full p-2 border rounded text-sm sm:text-base transition focus:outline-none
          ${disabled
                        ? "bg-gray-100 border-gray-300 cursor-not-allowed text-gray-700"
                        : "bg-white focus:ring-2 focus:ring-orange-500"}`}
            />
            {helper && (
                <p className="text-xs text-gray-500 mt-1">{helper}</p>
            )}
            {mandatory && (
                <p className="text-xs text-gray-500 mt-1">Mandatory</p>
            )}
        </div>
    );
}

function Textarea({ label, placeholder, mandatory }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label} {mandatory && <span className="text-red-500">*</span>}
            </label>
            <textarea
                rows="4"
                placeholder={placeholder}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500"
            />
            {mandatory && (
                <p className="text-xs text-gray-500 mt-1">Mandatory</p>
            )}
        </div>
    );
}

function FileUpload({ label, file, onChange }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
                {label}
            </label>

            <label className="flex items-center gap-4 cursor-pointer">
                <input
                    type="file"
                    className="hidden"
                    onChange={(e) => onChange(e.target.files[0])}
                />

                {/* Upload Button */}
                <span
                    className="flex items-center justify-center gap-2 
                     px-6 py-2 rounded-md 
                     bg-orange-100 text-orange-700 
                     hover:bg-orange-200 
                     min-w-[180px]"
                >
                    <Upload className="w-4 h-4" />
                    Upload
                </span>

                {/* File Name */}
                <span className="text-sm text-gray-500 truncate max-w-xs">
                    {file ? file.name : "No file chosen"}
                </span>
            </label>
        </div>
    );
}
