import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import StatusBadge from "../../../components/admin/common/StatusBadge";

const AvailableSchemes = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Available Schemes");
        setPageSubTitle("Explore the schemes you can apply for");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const rows = [
        { id: 1, name: "Application A", scheme_type: "one_time", eligibility_status: true, ineligibility_reason: "" },
        { id: 2, name: "Application B", scheme_type: "recurring", eligibility_status: false, ineligibility_reason: "Not Accepted" },
        { id: 3, name: "Application C", scheme_type: "one_time", eligibility_status: false, ineligibility_reason: "Not Eligible" },
    ];


    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Available Schemes</h3>

                <table className="w-full min-w-[500px]">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-2">Scheme Name</th>
                            <th className="p-2">Scheme Type</th>
                            <th className="p-2">Eligibility Status</th>
                            <th className="p-2">Ineligibility Reason</th>
                            <th className="p-2">Apply Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} className="border-b">
                                <td className="p-2">{row.name}</td>

                                <td className="p-2">
                                    <StatusBadge status={row.scheme_type} />
                                </td>

                                <td className="p-2">
                                    {row.eligibility_status ? (
                                        <StatusBadge status="eligible" />
                                    ) : (
                                        <StatusBadge status="not_eligible" />
                                    )}
                                </td>

                                <td className="p-2">
                                    {row.ineligibility_reason || "N/A"}
                                </td>

                                <td className="p-2">
                                    <button
                                        disabled={!row.eligibility_status}
                                        onClick={() => {
                                            if (row.eligibility_status) {
                                                navigate(`/admin/schemes/scheme-application/${row.id}/form`);
                                            }
                                        }}
                                        className={`
                                                    px-6 py-2.5 rounded-lg text-sm font-medium shadow-md transition-all
                                                    ${row.eligibility_status
                                                ? "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg active:scale-95"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }
                                        focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
                                        `}
                                    >
                                        Apply
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </>
    );
}

export default AvailableSchemes;