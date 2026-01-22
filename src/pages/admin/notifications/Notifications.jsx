import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Bell } from "lucide-react";

const Notifications = () => {
  const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } =
    useOutletContext();

  const navigate = useNavigate();

  // Dummy notifications (replace with API later)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Application Submitted",
      message: "Your grievance has been submitted successfully.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Status Updated",
      message: "Your application status has been updated to Under Review.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      title: "Incentive Application Submitted",
      message: "Your application status has been updated to Under Review.",
      time: "4 day ago",
      read: true,
    },
  ]);

  useEffect(() => {
    setPageTitle("Notifications");
    setPageSubTitle("View all system notifications");
    setBackButton(null);
    setActionButton(null);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-orange-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          Notifications
        </h3>
      </div>

      {/* Empty State */}
      {notifications.length === 0 && (
        <div className="text-center py-16">
          <Bell className="mx-auto w-10 h-10 text-gray-300 mb-4" />
          <p className="text-gray-500 text-sm">
            You don’t have any notifications yet.
          </p>
        </div>
      )}

      {/* Notifications List */}
      {notifications.length > 0 && (
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`border rounded-lg p-4 flex justify-between items-start
                ${item.read ? "bg-white" : "bg-orange-50 border-orange-200"}`}
            >
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {item.message}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {item.time}
                </p>
              </div>

              {!item.read && (
                <span className="h-2 w-2 rounded-full bg-orange-600 mt-2"></span>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Notifications;
