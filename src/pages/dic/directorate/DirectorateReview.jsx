import React from "react";

const DirectorateReview = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h3 className="text-lg font-semibold pb-1">
                Directorate Review of Commencement
            </h3>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Inspection verifies production; invoice mapped.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Unit Name" value="Alpine Crafts" readOnly />
                    <Input label="App ID" value="REG-2025-1001" readOnly />
                    <Input label="Proposed Commencement" placeholder="-" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Input
                        label="Actual Commencement"
                        placeholder="Actual Commencement"
                        className="md:col-span-1"
                    />
                    <Input label="Inspection Outcome" placeholder="Summary of inspection" />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Review Matrix
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Document Authenticity"
                        placeholder="DIC status + Inspecting Officer remarks"
                    />
                    <Input
                        label="Physical Verification"
                        placeholder="Geo-tag photos, officer notes"
                    />
                    <Input
                        label="Financial Linkage"
                        placeholder="First sales invoice mapping"
                    />
                    <Select
                        label="Consistency Check"
                        options={["Form I", "Form II"]}
                    />
                </div>
            </section>

            <section className="mb-6">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Directorate Action
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Select
                        label="Authentication Status"
                        options={["Approved", "Rejected", "Pending"]}
                    />
                    <Input
                        label="Authenticated Commencement Date"
                        placeholder="dd-mm-yyyy"
                        type="date"
                    />
                </div>

                <TextArea label="Remarks" />

                <div className="flex items-center gap-2 mt-3">
                    <input type="checkbox" id="slc" className="accent-orange-600" />
                    <label htmlFor="slc" className="text-sm text-gray-600">
                        Forward to SLC (if required)
                    </label>
                </div>
            </section>

            <div className="flex flex-wrap gap-3">
                <PrimaryButton text="Approve" />
                <SecondaryButton text="Authenticate date" />
                <SecondaryButton text="Reject" />
                <SecondaryButton text="End workflow" />
                <SecondaryButton text="Return" />
                <SecondaryButton text="Query to DIC" />
                <SecondaryButton text="Save Draft" />
            </div>
        </div>
    );
}

export default DirectorateReview;
/* ---------- Reusable Components ---------- */

const Input = ({
    label,
    value,
    placeholder = "",
    type = "text",
    className = "",
    readOnly = false,
    icon = false,
}) => (
    <div className={`flex flex-col ${className}`}>
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`
          h-10 w-full px-3 border rounded text-sm
          ${readOnly ? "bg-orange-50 cursor-not-allowed" : "bg-white"}
          focus:outline-none focus:ring-2 focus:ring-orange-500
        `}
        />
        {icon && (
            <span className="absolute right-3 top-2.5 text-gray-400">📷</span>
        )}
    </div>
);

const Select = ({ label, options }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <select className="h-10 w-full border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ">
            {options.map((opt) => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const TextArea = ({ label }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <textarea
            rows={3}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm "
        />
    </div>
);

const PrimaryButton = ({ text }) => (
    <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm shadow">
        {text}
    </button>
);

const SecondaryButton = ({ text }) => (
    <button className="px-6 py-2 bg-orange-200 hover:bg-orange-300 text-orange-700 rounded-lg text-sm">
        {text}
    </button>
);
