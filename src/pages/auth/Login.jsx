import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/AuthSlice";
import { toast } from "react-toastify";
import { ROLES } from "../../constants/roles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../validations/schemas";

export default function Login() {
    const dispatch = useDispatch();
    const { loading, error, token, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const resultAction = await dispatch(loginUser(values));

            if (loginUser.fulfilled.match(resultAction)) {
                toast.success("Login successful!", {
                    position: "top-right",
                    autoClose: 2000,
                });
            } else {
                toast.error(
                    resultAction.payload?.message || "Login failed. Please check your credentials.",
                    {
                        position: "top-right",
                        autoClose: 5000,
                    }
                );
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("An unexpected error occurred. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (token && user) {
            if (user.role === ROLES.ADMIN || user.role === ROLES.SUPER_ADMIN || user.role === ROLES.CONTENT_MANAGER) {
                navigate("/admin/dashboard");
            } else if (user.role === ROLES.USER) {
                navigate("/user/dashboard");
            } else {
                navigate("/admin/dashboard");
            }
        }
    }, [token, user, navigate]);

    return (
        <MainLayout>
            <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
                <div className="bg-white shadow-2xl w-full max-w-lg p-10 rounded-3xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign in to your account</h2>
                    <p className="text-center font-semibold text-orange-600 mb-8 text-sm">Access the Department of Industries portal</p>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-300">
                            {typeof error === "string" ? error : error.message || "Login failed"}
                        </div>
                    )}

                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-1">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                                    <div className="flex flex-col">
                                        <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder="Enter Email"
                                            disabled={loading || isSubmitting}
                                        />
                                        <div className="h-5">
                                            <ErrorMessage name="email" component="p" className="text-red-600 text-[12px] font-bold" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                                    <div className="flex flex-col">
                                        <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder="Enter Password"
                                            disabled={loading || isSubmitting}
                                        />
                                        <div className="h-5">
                                            <ErrorMessage name="password" component="p" className="text-red-600 text-[12px] font-bold" />
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
                                    disabled={loading || isSubmitting}
                                    className="w-full bg-orange-600 text-white p-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading || isSubmitting ? "Logging in..." : "Login"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-center text-gray-700 text-sm mt-6">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-orange-600 font-semibold hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}
