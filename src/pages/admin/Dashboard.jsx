import Card from "../../components/admin/common/Card";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {

  const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();

  useEffect(() => {
    setPageTitle("Dashboard Overview");
    setPageSubTitle("Welcome to Industrial Unit Portal");
    setActionButton(null);
    setBackButton(null);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Applications" value="12" subtitle="Submitted" gradient="bg-gradient-to-r from-blue-500 to-blue-700" />
        <Card title="Approved" value="6" subtitle="Approved" gradient="bg-gradient-to-r from-green-500 to-green-700" />
        <Card title="Pending Review" value="3" subtitle="Under Review" gradient="bg-gradient-to-r from-orange-500 to-red-500" />
        <Card title="Active Queries" value="1" subtitle="Queries Raised" gradient="bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>

        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">App ID</th>
              <th className="p-3">Status</th>
              <th className="p-3">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">APP-2025-001</td>
              <td className="p-3"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Pending</span></td>
              <td className="p-3">12 Jan 2025</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">APP-2025-002</td>
              <td className="p-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Approved</span></td>
              <td className="p-3">10 Jan 2025</td>
            </tr>
            <tr>
              <td className="p-3">APP-2024-158</td>
              <td className="p-3"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">In Review</span></td>
              <td className="p-3">08 Jan 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Dashboard;