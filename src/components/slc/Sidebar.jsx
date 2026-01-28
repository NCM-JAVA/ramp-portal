import { LayoutDashboard, LogOut, FileText, CheckCircle, XCircle, ClipboardMinus } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/AuthSlice";


export default function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [activePath, setActivePath] = useState("/slc/dashboard");

    useEffect(() => {
        if (location.pathname) {
            setActivePath(location.pathname);
        }
    }, [location.pathname]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    };

    const menuItems = [
        {
            label: "Dashboard",
            icon: <LayoutDashboard className="w-5 h-5" />,
            path: "/slc/dashboard",
            basePath: "/slc/dashboard",
        },
        {
            label: "Applications for Final Approval",
            icon: <FileText className="w-5 h-5" />,
            path: "/slc/applications-for-final-approval",
            basePath: "/slc/applications-for-final-approval",
        },
        {
            label: "Approved Applications",
            icon: <CheckCircle className="w-5 h-5" />,
            path: "/slc/approved-applications",
            basePath: "/slc/approved-applications",
        },
        {
            label: "Rejected Applications",
            icon: <XCircle className="w-5 h-5" />,
            path: "/slc/rejected-applications",
            basePath: "/slc/rejected-applications",
        },
        {
            label: "Reports",
            icon: <ClipboardMinus className="w-5 h-5" />,
            path: "/slc/reports",
            basePath: "/slc/reports",
        }
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-20"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <aside
                className={`
          fixed top-0 left-0 h-full bg-slate-900 text-slate-100 flex flex-col z-30
          w-64 transition-transform duration-300 shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                <div className="px-6 py-3 border-b border-slate-800 bg-slate-900">
                    <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <span className="text-indigo-500">SLC</span> Portal
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">State Level Committee</p>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                    <p className="uppercase text-xs font-semibold text-slate-500 mb-4 px-2 tracking-wider">Main Menu</p>
                    <nav className="space-y-1">
                        {menuItems.map((item, index) => {
                            const active =
                                location.pathname === item.basePath ||
                                location.pathname.startsWith(item.basePath + "/");
                            return (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    onClick={() => setActivePath(item.path)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                                        transition-all duration-200 group
                                        ${active
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50"
                                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                        }
                                    `}
                                >
                                    <span className={`${active ? "text-indigo-200" : "text-slate-500 group-hover:text-indigo-400"}`}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                <div className=" bg-slate-900/50">
                    <div className="m-4 mt-auto bg-gradient-to-r from-orange-500 to-indigo-600 p-4 rounded-xl text-white text-sm">
                        <p className="font-semibold">Need Help?</p>
                        <p className="text-xs opacity-80">Contact Support</p>
                    </div>
                </div>
            </aside>
        </>
    );
}