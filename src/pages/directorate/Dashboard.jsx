import { AlertTriangle, CheckCircle, Cpu, FileText } from "lucide-react";
import Card from "../../components/admin/common/Card";
import { useState } from "react";
import StatusBadge from "../../components/admin/common/StatusBadge";

const Dashboard = () => {

  const [openViewModal, setOpenViewModal] = useState(false);

  const data = [
    {
      appId: "REG-2025-1001",
      unitName: "Alpine Crafts",
      incentiveName: "Capital Investment Stamp",
      proposedInv: "₹ 5,00,000",
      actualVerified: "₹ 4,50,000",
      variance: "10%",
      status: "Pending"
    },
    {
      appId: "REG-2025-1002",
      unitName: "Himalayan Foods",
      incentiveName: "Stamp Duty",
      proposedInv: "₹ 2,00,000",
      actualVerified: "₹ 1,80,000",
      variance: "10%",
      status: "Flagged"
    },
  ];

  return (
    <>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold pb-1">Calculation Engine Dashboard</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
          <div>
            <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              Auto-compute incentives, review pending computations & logs
            </h3>
          </div>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            <p className="text-sm text-gray-600">
              Role: <span className="font-medium">Directorate Officer</span>
            </p>

            <button
              className="
                px-2 py-0.5
                bg-orange-600 hover:bg-orange-700
                text-white text-[11px]
                font-medium
                rounded
                transition
              "
              onClick={() => setOpenViewModal(true)}
            >
              Open Rule Config
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Incentives / Subsidy
            </label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50">
              <option value="">All Capital Investment Stamp</option>
              <option>Incentive 1</option>
              <option>Incentive 2</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50">
              <option value="">Select District</option>
              <option>District 1</option>
              <option>District 2</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Application Status
            </label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50">
              <option value="">All</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Financial Year
            </label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50">
              <option value="">2025-2026</option>
              <option>2024-2025</option>
              <option>2023-2024</option>
              <option>2022-2023</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Red Flag
            </label>
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50">
              <option value="">All</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="flex items-end h-full">
            <button
              className="
                px-12 py-2.5
                bg-orange-600 hover:bg-orange-700
                text-white text-sm font-medium
                rounded-lg shadow
                transition
              "
            >
              Apply
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Pending Calculation" value="1" subtitle="" gradient="bg-gradient-to-r from-blue-500 to-blue-700" icon={<FileText className="w-6 h-6" />} />
          <Card title="Rules Applied Today" value="25" subtitle="" gradient="bg-gradient-to-r from-green-500 to-green-700" icon={<CheckCircle className="w-6 h-6" />} />
          <Card title="Flagged Calculations" value="3" subtitle="" gradient="bg-gradient-to-r from-orange-500 to-orange-500" icon={<AlertTriangle className="w-6 h-6" />} />
          <Card title="Calculations Auto-Generated" value="13" subtitle="" gradient="bg-gradient-to-r from-indigo-500 to-indigo-500" icon={<Cpu className="w-6 h-6" />} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1 mt-6">
          <div>
            <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              Compliance List
            </h3>
          </div>
        </div>


        <div className="flex items-center justify-between px-4 py-3 border-b">
          <p className="text-sm font-semibold text-gray-700">
            Showing 2 records
          </p>

          <button
            className="
              px-3 py-1.5
              bg-orange-500 hover:bg-orange-700
              text-white text-sm font-medium
              rounded-md
              shadow
              transition
            "
          // onClick={handleExportExcel}
          >
            Export to Excel
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-sm text-gray-600">
              <th className="p-2">App ID</th>
              <th className="p-2">Incentive/Subsidy Name</th>
              <th className="p-2">Proposed Inv.</th>
              <th className="p-2">Actual Verified</th>
              <th className="p-2">Variance %</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
                <td className="p-2 text-orange-600 font-medium cursor-pointer">
                  {row.appId}
                </td>
                <td className="p-2">{row.incentiveName}</td>
                <td className="p-2">{row.proposedInv}</td>
                <td className="p-2">{row.actualVerified}</td>
                <td className="p-2">{row.variance}</td>
                <td className="p-2">
                  <span
                    className={`p-2 rounded-full text-xs font-medium ${row.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-2">
                  <button className="px-3 py-1.5 bg-orange-200 hover:bg-orange-300 text-orange-700 rounded-md text-sm">
                    Compute
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {openViewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden">

              {/* ===== Header ===== */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700">
                <h2 className="text-lg font-semibold text-white">
                  Incentive Rule Configuration
                </h2>
                <button
                  onClick={() => setOpenViewModal(false)}
                  className="text-white hover:text-orange-200 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="px-6 py-4 text-sm text-gray-700 grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Incentives / Subsidy %
                  </label>
                  <input type="text" name="incentive" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Max Cap (Rs.)
                  </label>
                  <input type="text" name="max_cap" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50" />
                </div>
              </div>
              <div className="px-6 py-4 text-sm text-gray-700 grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    APST Bonus %
                  </label>
                  <input type="text" name="apst_bonus" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base focus:bg-orange-50" />
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">

                <div className=" text-sm text-gray-700 max-w-[70%]">
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenViewModal(false)}
                    className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700"
                  >
                   Save Incentive
                  </button>
                </div>

              </div>


            </div>
          </div>
        )}

      </div>

    </>
  );
}

export default Dashboard;