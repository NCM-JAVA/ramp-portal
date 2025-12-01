import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CheckCircle } from "lucide-react";
import { useState } from "react";

const Declaration = ({ formData, handleChange, nextStep, prevStep }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 10000);
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
    <div className="space-y-6 p-3 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Declaration</h2>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-start sm:items-center gap-3">
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
            className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Full Name"
          />
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
            className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Signature"
          />
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
            className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Seal"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start md:items-center">
          <button
            onClick={prevStep}
            className="px-4 py-2 border rounded flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100"
          >
            <ArrowLeftCircleIcon size={20} />
            Back
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={prevStep}
            className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 bg-white flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-gray-100 w-full sm:w-auto"
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
