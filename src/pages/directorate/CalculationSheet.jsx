import React from "react";

const CalculationSheet = () => {

    const data = [
        {
            ruleParameter: "Minimum Investment Met?",
            value: "Yes",
            source: "Scheme Rules",
            status: "Pass"
        },
        {
            ruleParameter: "Unit Type Eligible?",
            value: "No",
            source: "Scheme Rules",
            status: "Fail"
        },
        {
            ruleParameter: "Required Documents Submitted?",
            value: "Yes",
            source: "Document Master",
            status: "Fail"
        },
        {
            ruleParameter: "APST % Requirement",
            value: "No",
            source: "Form I",
            status: "Pass"
        },
        {
            ruleParameter: "Form IV Required?",
            value: "Yes",
            source: "Scheme",
            status: "Pass"
        },
        {
            ruleParameter: "AnnualTurnover (If Required)",
            value: "Input",
            source: "Form III",
            status: "Fail"
        },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            {/* <h3 className="text-lg font-semibold pb-1">
                Directorate Review of Commencement
            </h3> */}

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Incentive Calculation Sheet (Auto + Editable)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Unit Name" value="Alpine Crafts" readOnly />
                    <Input label="Application ID" value="REG-2025-1001" readOnly />
                    <Input label="Incentive" value="Incentive Name" readOnly />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input label="Proposed Investment" value="From form I" readOnly />
                    <Input label="Actual Investment" value="Vaerified Value" readOnly />
                    <Input label="Investment Variance (%)" value="Investment Variance" readOnly />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Select
                        label="Eligibility Status"
                        options={["Eligible", "Not Eligible"]}
                    />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Rule Engine Output
                </h3>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-left text-sm text-gray-600">
                            <th className="p-2">Rule Paramater</th>
                            <th className="p-2">Value</th>
                            <th className="p-2">Source</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
                                <td className="p-2">{row.ruleParameter}</td>
                                <td className="p-2">{row.value}</td>
                                <td className="p-2">{row.source}</td>
                                <td className="p-2">
                                    <span
                                        className={`p-2 rounded-full text-xs font-medium ${row.status === "Pass"
                                            ? "bg-green-100 text-green-700 px-3 py-1"
                                            : "bg-red-100 text-red-700 px-3 py-1"
                                            }`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Financial Inputs
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Actual Land Investment (Verified)" value=""  />
                    <Input label="Actual Building Investment" value=""  />
                    <Input label="Actual P&M Investment" value=""  />
                    <Input label="Electrical Installation" value=""  />
                    <Input label="Other Eligible Components" value=""  />
                    <Input label="Total Eligible Fixed Capital" value=""  />
                </div>
            </section>

            <section className="mb-6">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Incentive Computation Formula
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Incentive Base Amount" value=""  />
                    <Input label="Incentive %" value=""  />
                    <Input label="Max Cap" value=""  />
                    <Input label="Amount Before Cap" value=""  />
                    <Input label="Final Sanction-Compatible Amount" value=""  />
                    <Input label="Variance Adjustment (If Applicable)" value=""  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input label="Final Incentive Payable" value="" readOnly  />
                </div>
            </section>

            <section className="mb-6">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Officer Override Controls
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Adjustment Allowed?" value=""  />
                    <Input label="Adjustment Amount" value=""  />
                    <Input label="Adjustment Reason" value=""  />
                    <Input label="Final Approval Amount" value=""  />
                </div>
            </section>

            <div className="flex flex-wrap gap-3">
                <PrimaryButton text="Save Draft" />
                <SecondaryButton text="Approve Calculation" />
                <SecondaryButton text="Reject Application" />
                <SecondaryButton text="Download Calculation Sheet" />
            </div>
        </div>
    );
}

export default CalculationSheet;

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
