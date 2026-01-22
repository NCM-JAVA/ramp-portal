import Card from "../../components/admin/common/Card";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatusBadge from "../../components/admin/common/StatusBadge";
import { Eye } from "lucide-react";

const Dashboard = () => {

//   const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
  const [openViewModal, setOpenViewModal] = useState(false);

//   useEffect(() => {
//     setPageTitle("Dashboard Overview");
//     setPageSubTitle("Welcome to Industrial Unit Portal");
//     setActionButton(null);
//     setBackButton(null);
//   }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Applications" value="12" subtitle="Submitted" gradient="bg-gradient-to-r from-blue-500 to-blue-700" />
        <Card title="Approved" value="6" subtitle="Approved" gradient="bg-gradient-to-r from-green-500 to-green-700" />
        <Card title="Pending Review" value="3" subtitle="Under Review" gradient="bg-gradient-to-r from-orange-500 to-red-500" />
        <Card title="Active Queries" value="1" subtitle="Queries Raised" gradient="bg-gradient-to-r from-orange-500 to-pink-500" />
      </div>

    </>
  );
}

export default Dashboard;