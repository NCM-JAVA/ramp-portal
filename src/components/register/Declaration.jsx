import React, { useRef } from 'react';
import { Field, useFormikContext } from 'formik';
import { ArrowLeftCircleIcon, CheckCircle, Upload } from "lucide-react";
import FormError from "../common/FormError";

const Declaration = ({ handleFileChange, handleSubmit, handleBack, errors, touched, success, loading }) => {
    const { values } = useFormikContext();

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    if (success) {
        return (
            <div className="text-center py-10 px-4">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />

                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    Registration Completed!
                </h2>

                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Thank you for registering. Your information has been successfully submitted.
                </p>

                <a
                    href="/auth/login"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
                >
                    Go to Login
                </a>
            </div>
        );
    }

    return (
        <div className="space-y-2 p-2 sm:p-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Declaration</h2>

            <div className="grid grid-cols-1">
                <div className="flex items-center space-x-3">
                    <Field
                        type="checkbox"
                        name="new_unit"
                        className="w-4 h-4 mt-1 sm:mt-0"
                    />
                    <label className="text-gray-700 font-medium text-sm sm:text-base">
                        I hereby declare that the information provided is true and correct to the best of my knowledge.
                    </label>
                </div>

                <div className="h-5">
                    <FormError name="new_unit" errors={errors} touched={touched} />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Full Name <span>*</span>
                    </label>
                    <Field
                        type="text"
                        name="full_name"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Full Name"
                    />

                    <div className="h-5">
                        <FormError name="full_name" errors={errors} touched={touched} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Signature (type name) <span>*</span>
                    </label>
                    <Field
                        type="text"
                        name="signature"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Signature"
                    />

                    <div className="h-5">
                        <FormError name="signature" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base flex items-center gap-2">
                        Signature file <span>*</span>
                        <span className="text-xs text-gray-500 font-normal">
                            (JPG, PNG, PDF • Max 2MB)
                        </span>
                    </label>


                    <input
                        type="file"
                        ref={fileInputRef}
                        name="signature"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="flex items-center justify-center gap-2 
                   px-4 py-2 
                   bg-orange-600 text-white 
                   rounded-md 
                   hover:bg-orange-700 
                   transition 
                   text-sm sm:text-base"
                    >
                        <Upload size={18} />
                        Upload Signature
                    </button>

                    {values.signature && (
                        <p className="text-sm text-orange-700 mt-1">
                            {values.signature.name}
                        </p>
                    )}

                    <div className="h-5">
                        {errors.signature && (
                            <p className="text-red-600 text-[12px] font-bold">
                                {errors.signature}
                            </p>
                        )}
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Seal <span>(Optional)</span>
                    </label>
                    <Field
                        type="text"
                        name="seal"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        placeholder="Seal"
                    />

                    <div className="h-5">
                        <FormError name="seal" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start md:items-center">
                    <button
                        onClick={handleBack}
                        disabled={loading}
                        type="button"
                        className="bg-orange-600 hover:bg-orange-700 
                            text-white
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-2 sm:text-base
                            rounded-md 
                            flex items-center justify-center gap-2
                            w-full sm:w-auto
                            transition-all
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ArrowLeftCircleIcon size={20} />
                        Back
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4">
                    <button
                        onClick={handleBack}
                        disabled={loading}
                        type="button"
                        className="px-4 py-2 text-sm
                                sm:px-5 sm:py-2 sm:text-base
                                border border-orange-400 rounded-md 
                                text-gray-700 bg-white 
                                flex items-center justify-center gap-2 
                                w-full sm:w-auto
                                hover:bg-orange-100
                                disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Save as Draft
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        type="submit"
                        className="bg-green-600 text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-green-700 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Declaration;
