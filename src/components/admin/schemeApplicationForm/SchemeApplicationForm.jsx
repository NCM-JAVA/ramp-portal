import { ArrowRightCircleIcon } from "lucide-react";

const SchemeApplicationForm = ({ formData, handleChange, nextStep, prevStep, errors, id }) => {

    return (
        <>
            <div className="space-y-2 p-2 sm:p-2">
                <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Unit Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                        label="Unit Name"
                        name="unit_name"
                        value={formData.unit_name}
                        readOnly
                    />

                    <Input
                        label="GSTIN"
                        name="gstin"
                        value={formData.gstin}
                        readOnly
                    />

                    <Input
                        label="Udyam Number"
                        name="udyam_no"
                        value={formData.udyam_no}
                        readOnly
                    />

                    <Input
                        label="Unit Address"
                        name="unit_address"
                        value={formData.unit_address}
                        readOnly
                        isTextArea
                    />

                </div>
            </div>

            <div className="space-y-2 p-2 sm:p-2">
                <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Scheme Specific Details</h3>
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
        "bg-gray-100 border-gray-300 cursor-not-allowed text-gray-700";
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
