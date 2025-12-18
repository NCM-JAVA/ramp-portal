import { ArrowRightCircleIcon } from "lucide-react";

const UnitDetails = ({ formData, handleChange, nextStep, prevStep, errors }) => {

    return (
        <div className="space-y-2 p-2 sm:p-2">

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Unit Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Name of Industrial Unit & Location <span>*</span>
                    </label>

                    <input
                        type="text"
                        name="industrial_unit"
                        value={formData.industrial_unit}
                        placeholder="Enter Name of Industrial Unit & Location"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.industrial_unit && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.industrial_unit}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Registered Mobile/Telephone
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        placeholder="Registered Mobile Number"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.phone && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Factory Address <span>*</span>
                    </label>

                    <input
                        type="text"
                        name="factory_address"
                        value={formData.factory_address}
                        placeholder="Address Line"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.factory_address && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_address}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <input
                        type="text"
                        name="po"
                        value={formData.po}
                        placeholder="PO"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.po && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.po}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <input
                        type="text"
                        name="district"
                        value={formData.district}
                        placeholder="District"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.district && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.district}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        placeholder="State"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.state && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.state}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Email <span>*</span>
                    </label>

                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        placeholder="Enter email"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.email && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="agree"
                        className="w-4 h-4"
                        onChange={handleChange}
                    />
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                        I agree to the terms
                    </label>
                </div>

                <div className="h-5">
                    {errors.agree && (
                        <p className="text-red-600 text-[12px] font-bold">
                            {errors.agree}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4 mt-2">

                <button
                    onClick={prevStep}
                    className="px-4 py-2 text-sm
                                sm:px-5 sm:py-2 sm:text-base
                                border border-orange-400 rounded-md 
                                text-gray-700 bg-white 
                                flex items-center justify-center gap-2 
                                w-full sm:w-auto
                                hover:bg-orange-100"
                >
                    Save as Draft
                </button>

                <button
                    onClick={nextStep}
                    className="bg-orange-600 hover:bg-orange-700 
                            text-white
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-2 sm:text-base
                            rounded-md 
                            flex items-center justify-center gap-2
                            w-full sm:w-auto
                            transition-all"
                >
                    Next
                    <ArrowRightCircleIcon size={20} />
                </button>

            </div>

        </div>
    );
};

export default UnitDetails;
