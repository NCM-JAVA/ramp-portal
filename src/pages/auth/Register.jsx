import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
    // const dispatch = useDispatch();
    const { loading, error, token, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/admin/dashboard");
        // dispatch(loginUser(formData));
        toast.success("Register successfully done");
    };

    return (
        <MainLayout>
            <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
                <div className="bg-white shadow-2xl w-full max-w-3xl p-10 rounded-3xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">New User Registration for APIDIP 2025 </h2>
                    <p className="text-center font-semibold text-orange-600 mb-8 text-sm">
                        {/* Access the Department of Industries portal */}
                        </p>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-300">
                            {typeof error === "string" ? error : JSON.stringify(error)}
                        </div>
                    )}

                    <form className="space-y-1" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Name of Enterprise <span className="text-red-600"> * </span></label>
                                <input
                                    type="text"
                                    name="enterprise_name"
                                    value={formData.enterprise_name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Name of Enterprise"
                                />

                                <div className="h-5">
                                    {error?.enterprise_name && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.enterprise_name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Name <span className="text-red-600"> * </span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Name"
                                />

                                <div className="h-5">
                                    {error?.name && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Email <span className="text-red-600"> * </span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Email"
                                />

                                <div className="h-5">
                                    {error?.email && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Phone Number <span className="text-red-600"> * </span></label>
                                <input
                                    type="number"
                                    name="contact_number"
                                    value={formData.contact_number}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Contact Number"
                                />

                                <div className="h-5">
                                    {error?.contact_number && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.contact_number}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Create Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Password"
                                />
                                <div className="h-5">
                                    {error?.password && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.password}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Confirm Password</label>
                                <input
                                    type="password"
                                    name="cnf_password"
                                    value={formData.cnf_password}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Confirm Password"
                                />
                                <div className="h-5">
                                    {error?.cnf_password && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {error.cnf_password}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
                        >
                            {loading ? "Logging in..." : "Submit"}
                        </button>
                    </form>

                    <p className="text-center text-gray-700 text-sm mt-6">
                        Already have an account?{' '}
                        <Link
                            to="/"
                            className="text-orange-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </div>
            </div>

        </MainLayout>
    );
}
