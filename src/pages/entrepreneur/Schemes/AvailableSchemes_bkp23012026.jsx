import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import StatusBadge from "../../../components/common/StatusBadge";

const AvailableSchemes = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Available Incentives / Subsidy");
        setPageSubTitle("Explore the incentives / subsidy you can apply for");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const rows = [
        { id: 1, category: "Capital and Setup Related Incentives", name: "Stamp Duty and Registration Fee Reimbursement", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "" },
        { id: 2, category: "Capital and Setup Related Incentives", name: "Capital Investment Incentive", scheme_type: "recurring", eligibility_status: false, ineligibility_reason: "Not Accepted" },
        { id: 3, category: "Capital and Setup Related Incentives", name: "Capital Interest Subvention", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },

        { id: 4, category: "Operational Incentives", name: "Working Capital Interest Subvention", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "Not Eligible" },
        { id: 5, category: "Operational Incentives", name: "Power Subsidy", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
        { id: 6, category: "Operational Incentives", name: "VAT Exemption", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },

        { id: 7, category: "Green and Sustainability Incentives", name: "Green Energy Generation", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
        { id: 8, category: "Green and Sustainability Incentives", name: "Wastewater Recycling", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "Not Eligible" },
        { id: 9, category: "Green and Sustainability Incentives", name: "Pollution Control Devices", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "Not Eligible" },
        { id: 10, category: "Green and Sustainability Incentives", name: "Electric Load Carriers", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },

        { id: 11, category: "Market Access and Quality Enhancement Incentives", name: "Transport Subsidy (Air Freight)", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
        { id: 12, category: "Market Access and Quality Enhancement Incentives", name: "Incentive for Exports", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
        { id: 13, category: "Market Access and Quality Enhancement Incentives", name: "Common Facilitation Centres", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
        { id: 14, category: "Market Access and Quality Enhancement Incentives", name: "Quality Control Assistance", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "Not Eligible" },

        { id: 15, category: "Incentives for Underprivileged Sections", name: "Incentives for Underprivileged Sections", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
    ];

    // 🔹 Group incentives by category
    const groupedByCategory = rows.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="bg-white p-6 rounded-xl shadow space-y-12">

            {Object.entries(groupedByCategory).map(([category, schemes]) => (
                <div key={category}>

                    {/* Category Heading */}
                    <h3 className="text-lg font-semibold text-orange-700 mb-5 border-l-4 border-orange-600 pl-3">
                        {category}
                    </h3>

                    {/* Incentive Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {schemes.map((row) => (
                            <div
                                key={row.id}
                                className={`relative rounded-xl border p-5 shadow-sm transition-all
                                    ${row.eligibility_status
                                        ? "bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                        : "bg-gray-100 cursor-not-allowed opacity-75"
                                    }`}
                                onClick={() => {
                                    if (row.eligibility_status) {
                                        navigate(`/admin/schemes/scheme-application/${row.id}/form`);
                                    }
                                }}
                            >
                                {/* Incentive Name */}
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                    {row.name}
                                </h4>

                                {/* Incentive Type */}
                                <div className="mb-2">
                                    <StatusBadge status={row.scheme_type} />
                                </div>

                                {/* Eligibility Status */}
                                <div className="mb-3">
                                    {row.eligibility_status ? (
                                        <StatusBadge status="eligible" />
                                    ) : (
                                        <StatusBadge status="not_eligible" />
                                    )}
                                </div>

                                {/* Ineligibility Reason */}
                                {!row.eligibility_status && (
                                    <p className="text-xs text-red-500 mb-3">
                                        {row.ineligibility_reason || "Not eligible"}
                                    </p>
                                )}

                                {/* Apply Button */}
                                <button
                                    disabled={!row.eligibility_status}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (row.eligibility_status) {
                                            navigate(`/entrepreneur/schemes/scheme-application/${row.id}/form`);
                                        }
                                    }}
                                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all
                                        ${row.eligibility_status
                                            ? "bg-orange-600 text-white hover:bg-orange-700 active:scale-95"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }
                                        focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
                                    `}
                                >
                                    Apply
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            ))}

        </div>
    );
};

export default AvailableSchemes;
