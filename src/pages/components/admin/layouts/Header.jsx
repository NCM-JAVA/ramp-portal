import { logout } from "../../../../redux/slice/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());       // Clears redux state + localStorage
        navigate("/auth/login");       // Redirect to login page
    };

    return (
        <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex justify-between items-center shadow-md">
            <div className="text-white">
                <h1 className="text-xl font-semibold">Industrial Unit Portal</h1>
                <p className="text-sm opacity-80">Department of Industries, Arunachal Pradesh</p>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-white">
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    🔔
                </button>

                <div className="text-white text-sm text-right">
                    <p className="font-semibold">Netcreativemind</p>
                    <p className="opacity-70">Company</p>
                </div>

                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Header;
