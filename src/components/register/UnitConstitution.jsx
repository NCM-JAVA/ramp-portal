import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const UnitConstitution = ({ formData, handleChange, handleFileChange, handleNext, handleBack, errors, touched }) => {
    return (
        <div className="space-y-2 p-2 sm:p-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Unit Constitution</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">

                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Constitution Type <span>*</span>
                    </label>
                    <select
                        name="constitution_type"
                        value={formData.constitution_type}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="">Select Constitution Type</option>
                        <option value="constitution 1">constitution 1</option>
                    </select>

                    <div className="h-5">
                        {errors.constitution_type && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.constitution_type}
                            </p>
                        )}
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Proprietor / Partners / Directors <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="partners"
                        value={formData.partners}
                        placeholder="Name"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />
                    <div className="h-5">
                        {errors.partners && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.partners}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        placeholder="Address"
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                    <div className="h-5">
                        {errors.address && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.address}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Aadhar Document <span>*</span>
                    </label>

                    <input
                        type="file"
                        name="aadhar_document"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        className="w-full p-2 border rounded 
               focus:outline-none focus:ring-2 focus:ring-orange-500 
               text-sm sm:text-base"
                        onChange={handleFileChange}
                    />

                    <div className="h-5">
                        {formData.aadhar_document && (
                            <p className="text-xs text-green-600 mt-1">
                                {formData.aadhar_document.name}
                            </p>
                        )}

                        {errors.aadhar_document && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.aadhar_document}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        PAN Document <span>*</span>
                    </label>

                    <input
                        type="file"
                        name="pan_document"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        className="w-full p-2 border rounded 
               focus:outline-none focus:ring-2 focus:ring-orange-500 
               text-sm sm:text-base"
                        onChange={handleFileChange}
                    />

                    <div className="h-5">
                        {formData.pan_document && (
                            <p className="text-xs text-green-600 mt-1">
                                {formData.pan_document.name}
                            </p>
                        )}

                        {errors.pan_document && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.pan_document}
                            </p>
                        )}
                    </div>
                </div>


            </div>

            <div className="grid grid-cols-1 ">
                <div>
                    <button
                        onClick={() => { }}
                        className="px-4 py-2 text-sm
              sm:px-5 sm:py-2 sm:text-base
              border border-orange-400 rounded-md 
              text-gray-700 bg-white 
              flex items-center justify-center gap-2 
              w-full sm:w-auto
              hover:bg-orange-100"
                    >
                        <span className="text-xl font-bold">+</span>
                        Add Member
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex justify-start items-center mt-2">
                    <button
                        onClick={handleBack}
                        type="button"
                        className="bg-orange-600 hover:bg-orange-700 
                            text-white
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-2 sm:text-base
                            rounded-md 
                            flex items-center justify-center gap-2
                            w-full sm:w-auto
                            transition-all"
                    >
                        <ArrowLeftCircleIcon size={20} />
                        Back
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4 mt-2">

                    <button
                        type="button"
                        className="
              px-4 py-2 text-sm
              sm:px-5 sm:py-2 sm:text-base
              border border-orange-400 rounded-md 
              text-gray-700 bg-white 
              flex items-center justify-center gap-2 
              w-full sm:w-auto
              hover:bg-orange-100
            "
                    >
                        Save as Draft
                    </button>

                    <button
                        onClick={handleNext}
                        type="button"
                        className="
              bg-orange-600 hover:bg-orange-700 
                            text-white
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-2 sm:text-base
                            rounded-md 
                            flex items-center justify-center gap-2
                            w-full sm:w-auto
                            transition-all
            "
                    >
                        Next
                        <ArrowRightCircleIcon size={20} />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default UnitConstitution;
