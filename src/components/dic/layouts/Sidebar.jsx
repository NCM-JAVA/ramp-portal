import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  User,
  ClipboardCheck,
  ClipboardList,
  MapPinCheck,
  Eye,
  ShieldCheck,
  FileBadge,
  UserPlus
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  // Default active route
  const [activePath, setActivePath] = useState("/dic/dashboard");

  // Update active on route change
  useEffect(() => {
    if (location.pathname) {
      setActivePath(location.pathname);
    }
  }, [location.pathname]);

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/dic/dashboard", basePath: "/dic/dashboard" },
    // { label: "Registration Dashboard", icon: <UserPlus className="w-5 h-5" />, path: "/dic/registration-management", basePath: "/dic/registration-management" },
    // { label: "Verification Queue", icon: <ClipboardCheck className="w-5 h-5" />, path: "/dic/verification-queue",  basePath: "/dic/verification-queue"},
    // { label: "Commencement Queue", icon: <ClipboardList className="w-5 h-5" />, path: "/dic/commencement-queue", basePath: "/dic/commencement-queue" },
    // { label: "Field Inspection", icon: <MapPinCheck className="w-5 h-5" />, path: "#", basePath: "#" },
    // { label: "Directorate Review of Commencement", icon: <Eye className="w-5 h-5" />, path: "/dic/directorate-review", basePath: "/dic/directorate-review" },
    // { label: "SLC Commencement Authentication", icon: <ShieldCheck className="w-5 h-5" />, path: "/dic/slc-commencement-authentication", basePath: "/dic/slc-commencement-authentication" },
    // { label: "Authentication Certificate", icon: <FileBadge className="w-5 h-5" />, path: "/dic/authentication-certificate", basePath: "/dic/authentication-certificate" },
    // { label: "Marketplace", icon: <ShoppingCart className="w-5 h-5" />, path: "/dic/market-place", basePath: "/dic/market-place" },
    // { label: "Grievance", icon: <AlertCircle className="w-5 h-5" />, path: "/dic/grievance", basePath: "/dic/grievance" },
    // { label: "Notifications", icon: <Bell className="w-5 h-5" />, path: "/dic/notifications", basePath: "/dic/notifications" },
    { label: "My Profile", icon: <User className="w-5 h-5" />, path: "/dic/my-profile", basePath: "/dic/my-profile" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#0f172a] text-gray-200 flex flex-col z-30
          w-64 transition-all duration-300
          border-r border-gray-700
          overflow-y-auto

          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <p className="uppercase text-xs mb-4 opacity-60 px-4 pt-4">
          Menu
        </p>

        <nav className="flex-1 px-3">
          {menuItems.map((item, index) => {
            // const active = item.path === activePath;
            const active =
            location.pathname === item.basePath ||
            location.pathname.startsWith(item.basePath + "/");
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setActivePath(item.path)}
                className={`
                  flex items-center gap-3 px-3 py-3 mb-2 rounded-lg text-sm 
                  transition-all duration-200
                  ${active
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-600 hover:text-white"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Fixed Help Box */}
        <div className="m-4 mt-auto bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-xl text-white text-sm">
          <p className="font-semibold">Need Help?</p>
          <p className="text-xs opacity-80">Contact Support</p>
        </div>
      </aside>
    </>
  );
}
