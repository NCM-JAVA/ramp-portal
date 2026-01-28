import { useState, useRef, useEffect } from "react";
import { Bell, User, Settings, LogOut, CheckCircle, AlertTriangle } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/AuthSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State for toggling dropdowns
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // Refs for click outside detection
    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    // Mock Notifications
    const notifications = [
        { id: 1, text: "New application pending from Tawang Textiles", time: "2 hrs ago", type: "alert" },
        { id: 2, text: "Application #APP-089 approved successfully", time: "5 hrs ago", type: "success" },
        { id: 3, text: "Finance Dept requested review on APP-045", time: "1 day ago", type: "alert" }
    ];

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full bg-gradient-to-r from-orange-600 to-indigo-600 px-6 py-4 flex justify-between items-center shadow-md relative z-40">
            <div className="text-white">
                {/* <h1 className="text-xl font-semibold">Industrial Unit Portal</h1> 
 				<p className="text-sm opacity-80">Department of Industries, Arunachal Pradesh</p> */}
            </div>

            <div className="flex items-center gap-6">

                {/* Notification Icon & Dropdown */}
                <div className="relative" ref={notificationRef}>
                    <button
                        className="relative text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-indigo-600"></span>
                        <Bell className="w-6 h-6" />
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn origin-top-right">
                            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                                <h3 className="font-semibold text-gray-800">Notifications</h3>
                                <span className="text-xs text-indigo-600 font-medium cursor-pointer hover:underline">Mark all read</span>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {notifications.map(note => (
                                    <div key={note.id} className="px-4 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3">
                                        <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${note.type === 'alert' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                                        <div>
                                            <p className="text-sm text-gray-800 leading-tight">{note.text}</p>
                                            <p className="text-xs text-gray-400 mt-1">{note.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-center">
                                <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">View All Activities</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile Section & Dropdown */}
                <div className="relative" ref={profileRef}>
                    <button
                        className="flex items-center gap-3 focus:outline-none"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <div className="text-white text-sm text-right hidden md:block">
                            <p className="font-semibold">Maniruddin Khan</p>
                            <p className="opacity-80 text-xs">SLC Member</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-white font-bold shadow-sm">
                            MK
                        </div>
                    </button>

                    {showProfile && (
                        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn origin-top-right">
                            <div className="px-4 py-4 border-b border-gray-100 bg-gray-50">
                                <p className="font-bold text-gray-800">Maniruddin Khan</p>
                                <p className="text-xs text-gray-500">maniruddin@slc.gov.in</p>
                            </div>
                            <div className="py-2">
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center gap-2 transition-colors">
                                    <User className="w-4 h-4" /> My Profile
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex items-center gap-2 transition-colors">
                                    <Settings className="w-4 h-4" /> Account Settings
                                </button>
                            </div>
                            <div className="border-t border-gray-100 py-2">
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" /> Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;