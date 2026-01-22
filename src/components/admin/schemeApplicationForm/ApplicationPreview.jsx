import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ApplicationPreview = ({formData, handleChange, nextStep, prevStep, errors, id, uploadedDocs = {}}) => {
    console.log('prevStep - ', nextStep);
    
    // const [formData, setFormData]=useState({})
    // useEffect(()=>{
    //     setFormData(data?.formData)
    // },[data])
    // console.log('formdata - ', uploadedDocs);
    const [declarationChecked, setDeclarationChecked] = useState(false);

    return (
        <>
            <div className="bg-white p-6 rounded-xl ">
                
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Application Preview
                </h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                        Application Summary
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md">
                        <PreviewItem label="Unit Name" value={formData?.unit_name} />
                        <PreviewItem label="GSTIN" value={formData?.gstin} />
                        <PreviewItem label="Udyam Number" value={formData?.udyam_no} />
                        <PreviewItem label="Investment Amount" value="1234" />
                        <PreviewItem label="Employment Commitment" value="898" />

                        <div className="md:col-span-2">
                            <PreviewItem
                                label="Unit Address"
                                value={formData?.unit_address}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                        Uploaded Documents
                    </h3>

                    <div className="space-y-2 text-md">
                        {Object.keys(uploadedDocs)?.length === 0 && (
                            <p className="text-gray-500">No documents uploaded.</p>
                        )}

                        {Object.entries(uploadedDocs)?.map(([key, file]) => (
                            <div
                                key={key}
                                className="flex justify-between items-center border rounded-md px-3 py-2"
                            >
                                <span className="capitalize">
                                    {key.replace(/_/g, " ")}
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        window.open(URL.createObjectURL(file), "_blank")
                                    }
                                    className="text-orange-600 hover:underline text-md"
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="flex items-start gap-3 text-md">
                        <input
                            type="checkbox"
                            checked={declarationChecked}
                            onChange={(e) => setDeclarationChecked(e.target.checked)}
                            className="mt-1"
                        />
                        <span className="text-gray-700">
                            I hereby declare that the information provided above is true
                            and correct to the best of my knowledge. I understand that
                            providing false information may lead to rejection of the
                            application.
                            <span className="text-red-600 font-semibold ml-1">*</span>
                        </span>
                    </label>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                <div className="flex justify-start items-center mt-2">
                    <button
                        onClick={prevStep}
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
                        onClick={prevStep}
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
                        onClick={nextStep}
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
        </>
    )
}

export default ApplicationPreview;

const PreviewItem = ({ label, value }) => (
    <div>
        <p className="text-gray-500 text-md">{label}</p>
        <p className="font-medium text-gray-800">
            {value || "-"}
        </p>
    </div>
);