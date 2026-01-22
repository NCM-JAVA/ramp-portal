import React from "react";

const SanctionPreparation = () => {

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Sanction Preparation (Post-Calculation)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Final Incentive Amount" placeholder="From calculation engine" />
                    <Input label="Inspection Verified Amount" placeholder="From inspection" />
                    <Input label="Recommended Amount" placeholder="From DLC" />                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input label="Difference" value="123123" readOnly />
                    <Input label="Reason for Difference" value="Text" readOnly />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Calculation Attachment 
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Calculation Sheet" type="file" />
                    <Input label="DLC Recommendation (Form XIV)" type="file" />
                    <Input label="Directorate Note" type="file" />                    
                </div>
            </section>

            <div className="flex flex-wrap gap-3">
                <PrimaryButton text="Generate Draft Sanction Order" />
                <SecondaryButton text="Creates PDF" />
                <SecondaryButton text="Forward to SLC" />
                <SecondaryButton text="For Approval" />
                <SecondaryButton text="Return to DIC" />
                <SecondaryButton text="Query" />
            </div>
        </div>
    );
}

export default SanctionPreparation;

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
