import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Building2,
  Gift,
  FileText,
  BarChart2,
  ShoppingCart,
  MessageSquare,
  User,
  Bell,
  AlertCircle
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  // Default active route
  const [activePath, setActivePath] = useState("/directorate/dashboard");

  // Update active on route change
  useEffect(() => {
    if (location.pathname) {
      setActivePath(location.pathname);
    }
  }, [location.pathname]);

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/directorate/dashboard", basePath: "/directorate/dashboard" },
    { label: "Calculation Sheet", icon: <LayoutDashboard className="w-5 h-5" />, path: "/directorate/calculation-sheets", basePath: "/directorate/calculation-sheets" },
    { label: "Rule Configuration", icon: <LayoutDashboard className="w-5 h-5" />, path: "/directorate/rule-configuration", basePath: "/directorate/rule-configuration" },
    { label: "Sanction Preparation", icon: <LayoutDashboard className="w-5 h-5" />, path: "/directorate/sanction-preparation", basePath: "/directorate/sanction-preparation" }
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
        <div className="m-4 mt-auto bg-gradient-to-r from-orange-500 to-indigo-600 p-4 rounded-xl text-white text-sm">
          <p className="font-semibold">Need Help?</p>
          <p className="text-xs opacity-80">Contact Support</p>
        </div>
      </aside>
    </>
  );
}
