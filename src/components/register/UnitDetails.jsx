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

                {/* <div className="flex flex-col">
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
                </div> */}

            </div>


            <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-orange-600 font-semibold border-b-2 border-orange-500 pb-1">
                Unit / Factory Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Location <span>*</span>
                    </label>

                    <input
                        type="text"
                        name="factory_address"
                        value={formData.factory_address}
                        placeholder="Location"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.factory_address && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_address}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Police Station/Post Office  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="factory_po"
                        value={formData.factory_po}
                        placeholder="Police Station/Post Office "
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.factory_po && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_po}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        District <span>*</span>
                    </label>
                    <select
                        name="factory_district"
                        value={formData.factory_district}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="">Select Constitution Type</option>
                        <option value="Anjaw">Anjaw</option>
                        <option value="Bichom">Bichom</option>
                        <option value="Changlang">Changlang</option>
                        <option value="Dibang Valley">Dibang Valley</option>
                        <option value="East Kameng">East Kameng</option>
                    </select>

                    <div className="h-1">
                        {errors.factory_district && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_district}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        State  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="factory_state"
                        value={formData.factory_state ?? "Arunachal Pradesh"}
                        placeholder="State"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.state && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.state}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Registered mobile number  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="factory_phone"
                        value={formData.factory_phone}
                        placeholder="Registered mobile/telephone number"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.factory_phone && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Email ID  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="factory_email"
                        value={formData.factory_email}
                        placeholder="Enter email ID"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.factory_email && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_email}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-orange-600 font-semibold border-b-2 border-orange-500 pb-1">
                Office Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Location <span>*</span>
                    </label>

                    <input
                        type="text"
                        name="office_address"
                        value={formData.office_address}
                        placeholder="Office Location"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.office_address && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_address}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Police Station/Post Office  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="office_po"
                        value={formData.office_po}
                        placeholder="Police Station/Post Office "
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.office_po && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_po}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        District <span>*</span>
                    </label>
                    <select
                        name="office_district"
                        value={formData.office_district}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="">Select Constitution Type</option>
                        <option value="Anjaw">Anjaw</option>
                        <option value="Bichom">Bichom</option>
                        <option value="Changlang">Changlang</option>
                        <option value="Dibang Valley">Dibang Valley</option>
                        <option value="East Kameng">East Kameng</option>
                    </select>

                    <div className="h-1">
                        {errors.office_district && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_district}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        State  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="office_state"
                        value={formData.office_state ?? "Arunachal Pradesh"}
                        placeholder="State"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.office_state && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_state}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Registered mobile number  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="office_phone"
                        value={formData.office_phone}
                        placeholder="Registered mobile/telephone number"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.office_phone && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Email ID  <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="office_email"
                        value={formData.office_email}
                        placeholder="Enter email ID"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 
                                  focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-1">
                        {errors.office_email && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.office_email}
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
