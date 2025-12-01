import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center 
                        bg-gradient-to-r from-blue-500 to-indigo-600 p-4">

            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl 
                            mx-auto">

                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
                    Login to your account
                </p>

                <form className="space-y-5 sm:space-y-6">
                    
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded-lg focus:outline-none 
                                       focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                            placeholder="Enter Email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-3 border rounded-lg focus:outline-none 
                                       focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-gray-700">Remember Me</span>
                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-sm text-indigo-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-3 rounded-lg 
                                   font-semibold hover:bg-indigo-700 transition text-sm sm:text-base"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}
