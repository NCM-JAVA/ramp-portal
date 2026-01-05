import React from 'react';
import { Field } from 'formik';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import FormError from "../common/FormError";

const Financials = ({ handleNext, handleBack, errors, touched }) => {
    return (
        <div className="space-y-2 p-2 sm:p-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Financials</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Land <span>*</span></label>
                    <Field
                        type="text"
                        name="land"
                        placeholder="Land"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="land" errors={errors} touched={touched} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Site Development <span>*</span></label>
                    <Field
                        type="text"
                        name="site_development"
                        placeholder="Site Development"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="site_development" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Factory Building <span>*</span></label>
                    <Field
                        type="text"
                        name="factory_building"
                        placeholder="Factory Building"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="factory_building" errors={errors} touched={touched} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Office Building <span>*</span></label>
                    <Field
                        type="text"
                        name="office_building"
                        placeholder="Office Building"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="office_building" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Plant & Machinery <span>*</span></label>
                    <Field
                        type="text"
                        name="plant_machinary"
                        placeholder="Plant & Machinery"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="plant_machinary" errors={errors} touched={touched} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Electrical Installation <span>*</span></label>
                    <Field
                        type="text"
                        name="electrical_installation"
                        placeholder="Electrical Installation"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="electrical_installation" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Preliminary & Pre-operative Expenses <span>*</span>
                    </label>
                    <Field
                        type="text"
                        name="preliminary_expenses"
                        placeholder="Preliminary & Pre-operative Expenses"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="preliminary_expenses" errors={errors} touched={touched} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Miscellaneous Fixed Assets <span>*</span>
                    </label>
                    <Field
                        type="text"
                        name="miscellaneous_fixed_assets"
                        placeholder="Miscellaneous Fixed Assets"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="miscellaneous_fixed_assets" errors={errors} touched={touched} />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Total <span className="text-xs font-normal">(Auto-calculated)</span></label>
                    <Field
                        type="text"
                        name="total_financial"
                        placeholder="Total"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        readOnly
                    />

                    <div className="h-5">
                        <FormError name="total_financial" errors={errors} touched={touched} />
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

export default Financials;
