import React from 'react';
import { Field } from 'formik';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import FormError from "../common/FormError";

const OperationalPlan = ({ formData, handleFileChange, handleNext, handleBack, errors, touched }) => {
    return (
        <div className="space-y-2 p-2 sm:p-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Operational Plan</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Proposed Date of Commencement <span>*</span>
                    </label>
                    <Field
                        type="date"
                        name="date_of_commencement"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="date_of_commencement" errors={errors} touched={touched} />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Type of Industry
                    </label>
                    <Field
                        as="select"
                        name="industry_type"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="">--- Select Industry Type ---</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </Field>
                    <div className="h-5">
                        <FormError name="industry_type" errors={errors} touched={touched} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <label className="flex items-center gap-3 text-sm sm:text-base cursor-pointer">
                    <Field
                        type="checkbox"
                        name="new_unit"
                        className="w-4 h-4"
                    />
                    <span className="text-gray-700 font-medium">
                        New unit (date must be on/after 01.04.2025)
                    </span>
                </label>

                <div className="h-5">
                    <FormError name="new_unit" errors={errors} touched={touched} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Type of Activity</label>
                    <Field
                        name="activity_type"
                        placeholder="Type of Activity"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="activity_type" errors={errors} touched={touched} />
                    </div>
                </div>


                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Name of Product/Service <span>*</span>
                    </label>
                    <Field
                        name="product_name"
                        placeholder="Enter Name of Product/Service"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="product_name" errors={errors} touched={touched} />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex flex-col sm:col-span-1 md:col-span-2">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Power Requirement <span>*</span>
                    </label>
                    <Field
                        name="power_requirement"
                        placeholder="Power Requirement"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="power_requirement" errors={errors} touched={touched} />
                    </div>
                </div>

                <div className="flex flex-col justify-end sm:col-span-1 md:col-span-1">
                    <Field
                        as="select"
                        name="power_requirement_unit"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    >
                        <option value="KW">KW</option>
                        <option value="MW">MW</option>
                    </Field>

                    <div className="h-5">
                        <FormError name="power_requirement_unit" errors={errors} touched={touched} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Load Sanction Certificate <span>(Optional)</span>
                    </label>
                    <Field
                        name="load_sanction_certificate"
                        placeholder="Load Sanction Certificate"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="load_sanction_certificate" errors={errors} touched={touched} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6">
                <div className="lg:col-span-6 flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Annual Production Capacity <span>*</span>
                    </label>
                    <Field
                        name="annual_production_capacity"
                        placeholder="Production Capacity"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="annual_production_capacity" errors={errors} touched={touched} />
                    </div>
                </div>

                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-end sm:col-span-1 md:col-span-1">
                        <Field
                            name="annual_production_quantity"
                            placeholder="Quantity"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        />

                        <div className="h-5">
                            <FormError name="annual_production_quantity" errors={errors} touched={touched} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-end sm:col-span-1 md:col-span-1">
                        <Field
                            name="annual_production_value"
                            placeholder="Value ($)"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                        />

                        <div className="h-5">
                            <FormError name="annual_production_value" errors={errors} touched={touched} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <button className="px-4 py-2 border border-orange-400 hover:bg-orange-100 rounded flex items-center gap-2 w-fit text-sm sm:text-base">
                    <span className="text-xl font-bold">+</span> Add Product
                </button>
            </div>

            <div className="grid grid-cols-1">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                        Major Raw Material <span>*</span>
                    </label>
                    <Field
                        name="major_raw_material"
                        placeholder="Material Name"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />

                    <div className="h-5">
                        <FormError name="major_raw_material" errors={errors} touched={touched} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <button className="px-4 py-2 border border-orange-400 hover:bg-orange-100 rounded flex items-center gap-2 w-fit text-sm sm:text-base">
                    <span className="text-xl font-bold">+</span> Add Material
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex items-center mt-4">
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

                <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 mt-4">

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
        </div >
    );
};

export default OperationalPlan;
