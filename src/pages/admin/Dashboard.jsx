import Card from "../../components/admin/common/Card";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatusBadge from "../../components/admin/common/StatusBadge";
import { Eye } from "lucide-react";

const Dashboard = () => {

  const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
  const [openViewModal, setOpenViewModal] = useState(false);

  useEffect(() => {
    setPageTitle("Dashboard Overview");
    setPageSubTitle("Welcome to Industrial Unit Portal");
    setActionButton(null);
    setBackButton(null);
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Applications" value="12" subtitle="Submitted" gradient="bg-gradient-to-r from-blue-500 to-blue-700" />
        <Card title="Approved" value="6" subtitle="Approved" gradient="bg-gradient-to-r from-green-500 to-green-700" />
        <Card title="Pending Review" value="3" subtitle="Under Review" gradient="bg-gradient-to-r from-orange-500 to-red-500" />
        <Card title="Active Queries" value="1" subtitle="Queries Raised" gradient="bg-gradient-to-r from-purple-500 to-pink-500" />
      </div> */}

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>

        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Application ID</th>
              <th className="p-2">Application Type</th>
              <th className="p-2">Unit Name </th>
              <th className="p-2">Scheme Name</th>
              <th className="p-2">Submission Date</th>
              <th className="p-2">Current Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">APP-2025-000123</td>
              <td className="p-2">Incentive Claim</td>
              <td className="p-2">Himalayan Agro Unit</td>
              <td className="p-2">Capital Investment Subsidy</td>
              <td className="p-2">12 Jan 2025</td>
              <td className="p-2"><StatusBadge status="under_scrutiny" /></td>
              <td className="p-2">
                  <button onClick={() => setOpenViewModal(true)} className="p-2 rounded-md hover:bg-orange-100 text-orange-600">
                      <Eye className="w-5 h-5" />
                  </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">APP-2025-000124</td>
              <td className="p-2">Incentive Claim</td>
              <td className="p-2">Himalayan Agro Unit</td>
              <td className="p-2">Capital Investment Subsidy</td>
              <td className="p-2">01 Mar 2025</td>
              <td className="p-2"><StatusBadge status="under_scrutiny" /></td>
              <td className="p-2">
                  <button onClick={() => setOpenViewModal(true)} className="p-2 rounded-md hover:bg-orange-100 text-orange-600">
                      <Eye className="w-5 h-5" />
                  </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">APP-2025-000125</td>
              <td className="p-2">Incentive Claim</td>
              <td className="p-2">Himalayan Agro Unit</td>
              <td className="p-2">Capital Investment Subsidy</td>
              <td className="p-2">21 Aug 2025</td>
              <td className="p-2"><StatusBadge status="under_scrutiny" /></td>
              <td className="p-2">
                  <button onClick={() => setOpenViewModal(true)} className="p-2 rounded-md hover:bg-orange-100 text-orange-600">
                      <Eye className="w-5 h-5" />
                  </button>
              </td>
            </tr>
          </tbody>
        </table>

        {openViewModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">

                        {/* ===== Header ===== */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700">
                            <h2 className="text-lg font-semibold text-white">
                                View Details
                            </h2>
                            <button
                                onClick={() => setOpenViewModal(false)}
                                className="text-white hover:text-orange-200 text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* ===== Body ===== */}
                        <div className="px-6 py-4 text-sm text-gray-700 grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium">Application ID</p>
                                <p>APP-2025-000123</p>
                            </div>

                            <div>
                                <p className="font-medium">Applicant Name</p>
                                <p>Rajesh Kumar</p>
                            </div>

                            <div>
                                <p className="font-medium">Application Type</p>
                                <p >Incentive Claim</p>
                            </div>

                            <div>
                                <p className="font-medium">Contact Number</p>
                                <p >+91 7898754657</p>
                            </div>
                            <div>
                                <p className="font-medium"> Unit Name</p>
                                <p >Himalayan Agro Unit</p>
                            </div>
                            <div>
                                <p className="font-medium">Email Address</p>
                                <p >rajesh@himalayan-agro.com</p>
                            </div>
                            <div>
                                <p className="font-medium">Scheme</p>
                                <p >Capital Investment Subsidy</p>
                            </div>
                            <div>
                                <p className="font-medium">Address</p>
                                <p >Industrial Area, Itanagar, Arunachal Pradesh</p>
                            </div>
                            <div>
                                <p className="font-medium">Submission Date</p>
                                <p >12 Jan 2025</p>
                            </div>
                            <div>
                                <p className="font-medium"> Claim Amount</p>
                                <p >Rs 15,00,000</p>
                            </div>
                            <div>
                                <p className="font-medium"> Status</p>
                                <p ><StatusBadge status="under_security" /></p>
                            </div>

                        </div>


                        {/* ===== Footer ===== */}
                        <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">

                            <div className=" text-sm text-gray-700 max-w-[70%]">
                                <div>
                                    <p className="font-medium">Submitted Documents</p>
                                    <p>Investment Proof, Bank Statement, Registration Certificate</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setOpenViewModal(false)}
                                    className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100"
                                >
                                    Close
                                </button>

                                <button
                                    className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700"
                                >
                                    Download PDF
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