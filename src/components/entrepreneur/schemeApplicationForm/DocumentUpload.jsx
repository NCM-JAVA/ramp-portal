import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const SchemeApplicationForm = ({ formData, handleChange, nextStep, prevStep, errors, documentsConfig, uploadedDocs, handleFileChange }) => {
  // console.log('nextStep - ', nextStep);
  
  return (
    <>
      <div className="space-y-2 p-2 sm:p-2">
        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Document Upload</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {documentsConfig.map((doc) => (
            <div
              key={doc.key}
              
            >
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                  {doc.name}
                  {doc.mandatory && (
                    <span className="text-red-600 ml-1">*</span>
                  )}

                  <span className="text-xs text-gray-500">(PDF / JPG / PNG only)</span>
                </label>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full p-2 border rounded 
                      focus:outline-none focus:ring-2 focus:ring-orange-500 
                      text-sm sm:text-base"
                  onChange={(e) =>
                    handleFileChange(doc.key, e.target.files[0])
                  }
                />

                {uploadedDocs[doc.key] && (
                  <button
                    onClick={() =>
                      window.open(
                        URL.createObjectURL(uploadedDocs[doc.key]),
                        "_blank"
                      )
                    }
                    className="px-3 py-1 bg-orange-100 rounded mt-1"
                  >
                    Preview
                  </button>
                )}
              </div>
            </div>
          ))}

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
  );
};


export default SchemeApplicationForm;
