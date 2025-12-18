import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Card from "../../../components/admin/common/Card";
import { Eye, Edit, Trash2 } from "lucide-react";
import StatusBadge from "../../../components/admin/common/StatusBadge";


const UnitManagement = () => {

  const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle("Unit Management");
    setPageSubTitle("Manage your industrial units");
    setActionButton(
      <button
        onClick={() => navigate("/admin/unit-registration")}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow font-semibold border border-blue-600 hover:bg-blue-50"
      >
        + New Unit Registration
      </button>
    );
    setBackButton(null);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Units" value="9" subtitle="Submitted" gradient="bg-gradient-to-r from-blue-500 to-blue-700" />
        <Card title="Approved Units" value="6" subtitle="Approved" gradient="bg-gradient-to-r from-green-500 to-green-700" />
        <Card title="Pending Approval" value="3" subtitle="Under Review" gradient="bg-gradient-to-r from-orange-500 to-red-500" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Registered Units</h3>

        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Unit ID</th>
              <th className="p-2">Unit Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Constitution Type</th>
              <th className="p-2">GST Number</th>
              <th className="p-2">Udyog Number</th>
              <th className="p-2">Registration Date</th>
              <th className="p-2">Status</th>
              <th className="p-2 w-32">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">UNIT-2025-001</td>
              <td className="p-2">ABC Private Manufactoring Pvt Ltd</td>
              <td className="p-2">New Delhi</td>
              <td className="p-2">Private Limited Company</td>
              <td className="p-2">12AGBVFFDF232JSD</td>
              <td className="p-2">UDYAM-AR-01-0012345</td>
              <td className="p-2">01-Dec-2025</td>
              <td className="p-2"><StatusBadge status="pending" /></td>
              <td className="p-2">
                <button className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                  <Eye className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                  <Edit className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">UNIT-2025-002</td>
              <td className="p-2">ABC Private Manufactoring Pvt Ltd</td>
              <td className="p-2">New Delhi</td>
              <td className="p-2">Private Limited Company</td>
              <td className="p-2">12AGBVFFDF232JSD</td>
              <td className="p-2">UDYAM-AR-01-0012345</td>
              <td className="p-2">01-Dec-2025</td>
              <td className="p-2"><StatusBadge status="approved" /></td>
              <td className="p-2">
                <button className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                  <Eye className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                  <Edit className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">UNIT-2025-003</td>
              <td className="p-2">ABC Private Manufactoring Pvt Ltd</td>
              <td className="p-2">New Delhi</td>
              <td className="p-2">Private Limited Company</td>
              <td className="p-2">12AGBVFFDF232JSD</td>
              <td className="p-2">UDYAM-AR-01-0012345</td>
              <td className="p-2">01-Dec-2025</td>
              <td className="p-2"><StatusBadge status="review" /></td>
              <td className="p-2">
                <button className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                  <Eye className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                  <Edit className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">UNIT-2025-004</td>
              <td className="p-2">ABC Private Manufactoring Pvt Ltd</td>
              <td className="p-2">New Delhi</td>
              <td className="p-2">Private Limited Company</td>
              <td className="p-2">12AGBVFFDF232JSD</td>
              <td className="p-2">UDYAM-AR-01-0012345</td>
              <td className="p-2">01-Dec-2025</td>
              <td className="p-2"><StatusBadge status="rejected" /></td>
              <td className="p-2">
                <button className="p-2 rounded-md hover:bg-blue-100 text-blue-600">
                  <Eye className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-green-100 text-green-600">
                  <Edit className="w-5 h-5" />
                </button>

                <button className="p-2 rounded-md hover:bg-red-100 text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UnitManagement;
