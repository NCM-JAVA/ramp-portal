import React from "react";

const CalculationAuditLog = () => {

    const data = [
        {
            logId: "LOG-001",
            appId: "REG-2025-1001",
            ruleExecuted: "Capital Investment",
            systemValue: "Document",
            officerOverride: "DPR Missing",
            user: "Anshu Singh",
            timestamp: "2025-04-05 14:30",
            status: "Pending"
        },
        {
            logId: "LOG-002",
            appId: "REG-2025-1002",
            ruleExecuted: "Capital Investment Check",
            systemValue: "Document Found",
            officerOverride: "DPR Found",
            user: "R. Sharma",
            timestamp: "2025-04-07 14:30",
            status: "Approved"
        }
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Calculation Audit Log
                </h3>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-left text-sm text-gray-600">
                            <th className="p-2">Log ID</th>
                            <th className="p-2">App ID</th>
                            <th className="p-2">Rule Executed</th>
                            <th className="p-2">System Value</th>
                            <th className="p-2">Officer Override</th>
                            <th className="p-2">User</th>
                            <th className="p-2">Timestamp</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
                                <td className="p-2">{row.logId}</td>
                                <td className="p-2">{row.appId}</td>
                                <td className="p-2">{row.ruleExecuted}</td>
                                <td className="p-2">{row.systemValue}</td>
                                <td className="p-2">{row.officerOverride}</td>
                                <td className="p-2">{row.user}</td>
                                <td className="p-2">{row.timestamp}</td>
                                <td className="p-2">
                                    <span
                                        className={`p-2 rounded-full text-xs font-medium ${row.status === "Approved"
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

        </div>
    );
}

export default CalculationAuditLog;

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
