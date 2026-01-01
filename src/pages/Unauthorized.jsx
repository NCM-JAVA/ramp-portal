import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export default function Unauthorized() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-2xl w-full max-w-md p-10 rounded-3xl border border-gray-200 text-center">
                <ShieldAlert className="w-20 h-20 text-orange-600 mx-auto mb-4" />

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Access Denied
                </h1>

                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    You don't have permission to access this page. Please contact your administrator if you believe this is an error.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/admin/dashboard"
                        className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
                    >
                        Go to Dashboard
                    </Link>

                    <Link
                        to="/auth/login"
                        className="border border-orange-600 text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-all"
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
}
