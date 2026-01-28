import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";

export default function Login() {
    const dispatch = useDispatch();
    const { loading, error, token, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const userid = formData?.email?.trim();
        // let res = await actions.LoginAction(formData);

        // if (res?.status === 200) {
        // toast.success("Login Successful");
        if (userid === "DIC012026") {
            navigate("/dic/dashboard");
            return;
        } else if (userid === "DIR012026") {
            navigate("/directorate/dashboard");
            return;
        } else if (userid === "SLC012026") {
            navigate("/slc/dashboard");
            return;
        } else {
            setOpenModal(true);
        }
        // }else{
        //     setErrors(res?.errors || {});
        //     return;
        // }
    };

    useEffect(() => {
        if (token) {
            navigate("/entrepreneur/dashboard");
        } else {
            setFormData({ login: "", password: "" });
        }
    }, [token]);

    console.log('login page error ---- ', errors);

    return (
        <MainLayout>
            <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
                <div className="bg-white shadow-2xl w-full max-w-lg p-10 rounded-3xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Sign in to your account</h2>
                    <p className="text-center font-semibold text-orange-600 mb-8 text-sm">Access the Department of Industries portal</p>

                    {errors && errors.length > 0 && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-300">
                            {typeof errors === "string" ? errors : JSON.stringify(errors)}
                        </div>
                    )}

                    <form className="space-y-1" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Userid</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                    placeholder="Enter Userid / login"
                                />

                                <div className="h-5">
                                    {errors?.email && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {errors.email}
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
                                    {errors?.password && (
                                        <p className="text-red-600 text-[12px] font-bold">
                                            {errors.password}
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

            {openModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 animate-fadeIn">

                        {/* Header */}
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                            Choose Next Action
                        </h2>
                        <p className="text-sm text-gray-500 text-center mb-8">
                            Select one option to continue
                        </p>

                        {/* Button-style Options */}
                        <div className="grid gap-5">

                            {/* Option 1 */}
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                    navigate("/unit-register");
                                }}
                                className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200
                     hover:border-orange-600 hover:bg-orange-50 transition-all
                     text-left shadow-sm hover:shadow-md"
                            >
                                <div className="mt-1 w-5 h-5 rounded-full border-2 border-orange-600
                          group-hover:bg-orange-600"></div>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        Registration for APIDIP 2025
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Unit Registration
                                    </p>
                                </div>
                            </button>


                            {/* Option 2 */}

                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                    navigate("/entrepreneur/dashboard");
                                }}
                                className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200
                     hover:border-green-600 hover:bg-green-50 transition-all
                     text-left shadow-sm hover:shadow-md"
                            >
                                <div className="mt-1 w-5 h-5 rounded-full border-2 border-green-600
                          group-hover:bg-green-600"></div>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        Application for Subsidy / Incentive
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Claim for APIDIP
                                    </p>
                                </div>
                            </button>



                        </div>
                    </div>
                </div>
            )}




        </MainLayout>
    );
}
