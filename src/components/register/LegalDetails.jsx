import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useRef } from "react";

const LegalDetails = ({ formData, handleChange, handleFileChange, handleNext, handleBack, errors, touched }) => {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="space-y-2 p-2 sm:p-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Legal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Udyam / IEM Registration No. <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="udyam_registration_no"
                        value={formData.udyam_registration_no}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Udyam / IEM Registration No."
                    />

                    <div className="h-5">
                        {errors.udyam_registration_no && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.udyam_registration_no}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Trading License No. <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="trading_license_no"
                        value={formData.trading_license_no}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Trading License No."
                    />

                    <div className="h-5">
                        {errors.trading_license_no && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.trading_license_no}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        GST No. <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="gst_no"
                        value={formData.gst_no}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="GST No."
                    />

                    <div className="h-5">
                        {errors.gst_no && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.gst_no}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base flex items-center gap-2">
                        GST Document Upload <span>*</span>
                        <span className="text-xs text-gray-800 font-normal">
                            (JPG, PNG, PDF • Max 2MB)
                        </span>
                    </label>

                    <input
                        type="file"
                        name="gst_document"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        className="w-full p-2 border rounded 
               focus:outline-none focus:ring-2 focus:ring-orange-500 
               text-sm sm:text-base"
                        onChange={handleFileChange}
                    />

                    <div className="h-5">
                        {formData.gst_document && (
                            <p className="text-xs text-green-600 mt-1">
                                {formData.gst_document.name}
                            </p>
                        )}

                        {errors.gst_document && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.gst_document}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Factory License No. <span>*</span>
                    </label>
                    <input
                        type="text"
                        name="factory_license_no"
                        value={formData.factory_license_no}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Factory License No."
                    />

                    <div className="h-5">
                        {errors.factory_license_no && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_license_no}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Factory License Document <span>*</span>
                        <span className="text-xs text-gray-800 font-normal">
                            (JPG, PNG, PDF • Max 2MB)
                        </span>
                    </label>

                    <input
                        type="file"
                        name="factory_license_document"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        className="w-full p-2 border rounded 
               focus:outline-none focus:ring-2 focus:ring-orange-500 
               text-sm sm:text-base"
                        onChange={handleFileChange}
                    />

                    <div className="h-5">
                        {formData.factory_license_document && (
                            <p className="text-xs text-green-600 mt-1">
                                {formData.factory_license_document.name}
                            </p>
                        )}

                        {errors.factory_license_document && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.factory_license_document}
                            </p>
                        )}
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Consent to Operate / SPCB <span className="text-xs font-normal">(If Applicable)</span>
                    </label>
                    <input
                        type="text"
                        name="consent_operate"
                        value={formData.consent_operate}
                        placeholder="Consent to Operate / SPCB"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.consent_operate && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.consent_operate}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Any Other Registration <span className="text-xs font-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        name="other_registration"
                        value={formData.other_registration}
                        placeholder="Any Other Registration"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        onChange={handleChange}
                    />

                    <div className="h-5">
                        {errors.other_registration && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.other_registration}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start md:items-center">
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

                <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4">
                    <button
                        type="button"
                        className=" px-4 py-2 text-sm
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
                        onClick={handleNext}
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
                        Next
                        <ArrowRightCircleIcon size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalDetails;
