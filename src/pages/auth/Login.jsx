import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/AuthSlice";

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
        navigate("/admin/dashboard");
        // dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (token) {
            navigate("/admin/dashboard");
        } else {
            setFormData({ email: "", password: "" });
        }
    }, [token]);

    return (
        <MainLayout>
            <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
                <div className="bg-white shadow-2xl w-full max-w-lg p-10 rounded-3xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign in to your account</h2>
                    <p className="text-center font-semibold text-orange-600 mb-8 text-sm">Access the Department of Industries portal</p>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-300">
                            {typeof error === "string" ? error : JSON.stringify(error)}
                        </div>
                    )}

                    <form className="space-y-1" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Email</label>
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Password</label>
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
                        </div>

                        <div className="flex items-center justify-between text-sm pt-3 pb-3">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="text-gray-700">Remember Me</span>
                            </label>

                            <Link to="/forgot-password" className="text-orange-600 hover:underline font-medium">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="text-center text-gray-700 text-sm mt-6">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-orange-600 font-semibold hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}
