import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CheckCircle } from "lucide-react";
import { useState } from "react";

const Declaration = ({ formData, handleChange, handleSubmit, nextStep, prevStep, errors, success }) => {
  // const [success, setSuccess] = useState(false);

  // const handleSubmit = () => {
  //   if(errors){
  //     return;
  //   }
  //   setSuccess(true);
  //   setTimeout(() => {
  //     window.location.href = "/auth/login";
  //   }, 5000);
  // };

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
          <input
            type="checkbox"
            name="new_unit"
            className="w-4 h-4 mt-1 sm:mt-0"
            onChange={handleChange}
          />
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            I hereby declare that the information provided is true and correct to the best of my knowledge.
          </label>
        </div>

        <div className="h-5">
          {errors.new_unit && (
            <p className="text-red-600 text-[12px] font-bold">
              {errors.new_unit}
            </p>
          )}
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Full Name"
          />

          <div className="h-5">
            {errors.full_name && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.full_name}
              </p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Signature (type name) <span>*</span>
          </label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Signature"
          />

          <div className="h-5">
            {errors.signature && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.signature}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Seal <span>(Optional)</span>
          </label>
          <input
            type="text"
            name="seal"
            value={formData.seal}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Seal"
          />

          <div className="h-5">
            {errors.seal && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.seal}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start md:items-center">
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

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4">
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
            onClick={handleSubmit}
            className="bg-green-600 text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-green-700 w-full sm:w-auto"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
