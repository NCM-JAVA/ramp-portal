import { ArrowRightCircleIcon } from "lucide-react";

const SchemeApplicationForm = ({ formData, handleChange, nextStep, prevStep, errors, id }) => {
    // console.log('form data incentives application - ',formData.unit_name);
    
    return (
        <>
            <div className="space-y-2 p-2 sm:p-2">
                <h3 className="text-lg font-semibold border-b-2 border-orange-500 pb-1">Unit Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                        label="Unit Name"
                        name="unit_name"
                        value={formData.unit_name}
                        readOnly
                    />

                </div>
                
                <p className=" font-semibold pt-4">Factory Address</p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                        label="Location"
                        name="factory_location"
                        value={formData.factory_location ?? 'Changlang'}
                        readOnly
                    />

                    <Input
                        label="Police Station/Post Office"
                        name="factory_po"
                        value={formData.factory_po ?? 'Changlang'}
                        readOnly
                    />

                    <Input
                        label="District"
                        name="factory_district"
                        value={formData.factory_district ?? 'Changlang'}
                        readOnly
                    />
                    <Input
                        label="State"
                        name="factory_state"
                        value={formData.factory_state ?? 'Arunachal Pradesh'}
                        readOnly
                    />
                    <Input
                        label="Registered Mobile Number"
                        name="factory_phone"
                        value={formData.factory_phone ?? '+91 9787787657'}
                        readOnly
                    />
                    <Input
                        label="Email ID"
                        name="factory_email"
                        value={formData.factory_email ?? 'anshu.singh@netcreativemind.com'}
                        readOnly
                    />

                </div>

                <p className=" font-semibold pt-4">Office Address</p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                        label="Location"
                        name="office_location"
                        value={formData.office_location ?? 'Changlang'}
                        readOnly
                    />

                    <Input
                        label="Police Station/Post Office"
                        name="office_po"
                        value={formData.office_po ?? 'Changlang'}
                        readOnly
                    />

                    <Input
                        label="District"
                        name="office_district"
                        value={formData.office_district ?? 'Changlang'}
                        readOnly
                    />
                    <Input
                        label="State"
                        name="office_state"
                        value={formData.office_state ?? 'Arunachal Pradesh'}
                        readOnly
                    />
                    <Input
                        label="Registered Mobile Number"
                        name="office_phone"
                        value={formData.office_phone ?? '+91 9787787657'}
                        readOnly
                    />
                    <Input
                        label="Email ID"
                        name="office_email"
                        value={formData.office_email ?? 'anshu.singh@netcreativemind.com'}
                        readOnly
                    />
                </div>
            </div>

            <div className="space-y-2 p-2 sm:p-2">
                <h3 className="text-lg font-semibold border-b-2 border-orange-500 pb-1">Incentive Specific Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                        label="Investment Amount"
                        name="investment_amount"
                        type="number"
                        value={formData.investment_amount}
                        placeholder="234"
                        onChange={handleChange}
                    />

                    <Input
                        label="Employment Commitment"
                        name="employment_commitment"
                        type="number"
                        value={formData.employment_commitment}
                        placeholder="234"
                        onChange={handleChange}
                    />

                    <Input
                        label="Power Details"
                        name="power_details"
                        value={formData.power_details}
                        placeholder="234"
                        onChange={handleChange}
                    />

                    <Input
                        label="Tax Details"
                        name="tax_details"
                        type="number"
                        value={formData.tax_details}
                        placeholder="234"
                        onChange={handleChange}
                    />

                </div>
            </div>

            <div className="space-y-2 p-2 sm:p-2">
                <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4 ">

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

        </>
    );
};

const Input = ({
    label,
    isTextArea = false,
    readOnly = false,
    className = "",
    ...rest
}) => {
    const base =
        "w-full p-2 border rounded text-sm sm:text-base transition focus:outline-none";
    const readonlyStyles =
        "bg-orange-50 cursor-not-allowed text-gray-700";
    const editableStyles = "bg-white focus:ring-2 focus:ring-orange-500";

    const commonClass = `${base} ${readOnly ? readonlyStyles : editableStyles
        }`;

    return (
        <div className={className}>
            <label className="text-sm font-medium text-gray-700">{label}</label>

            {isTextArea ? (
                <textarea
                    {...rest}
                    readOnly={readOnly}
                    rows={3}
                    className={`${commonClass} resize-none`}
                />
            ) : (
                <input
                    {...rest}
                    readOnly={readOnly}
                    className={commonClass}
                />
            )}
        </div>
    );
};

export default SchemeApplicationForm;
