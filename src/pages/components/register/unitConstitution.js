import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const UnitConstitution = ({ formData, handleChange, nextStep, prevStep, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Unit Constitution</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Constitution Type <span>*</span>
          </label>
          <select
            name="constitution_type"
            value={formData.constitution_type}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          >
            <option value="">Select Constitution Type</option>
            <option value="constitution 1">constitution 1</option>
          </select>
          {errors.constitution_type && (
            <p className="text-red-600 text-[12px] font-bold">
              {errors.constitution_type}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Proprietor / Partners / Directors <span>*</span>
          </label>
          <input
            type="text"
            name="partners"
            value={formData.partners}
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            onChange={handleChange}
          />
          <div className="h-5">
            {errors.partners && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.partners}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
          <div className="h-5">
            {errors.address && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.address}
              </p>
            )}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 ">
        <div>
          <button
            onClick={() => { }}
            className="px-4 py-2 border rounded flex items-center gap-2 text-sm sm:text-base hover:bg-gray-50"
          >
            <span className="text-xl font-bold">+</span>
            Add Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        <div className="flex justify-start items-center mt-2">
          <button
            onClick={prevStep}
            className="px-4 py-2 border rounded flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100"
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
              border border-gray-400 rounded-md 
              text-gray-700 bg-white 
              flex items-center justify-center gap-2 
              w-full sm:w-auto
              hover:bg-gray-100
            "
          >
            Save as Draft
          </button>

          <button
            onClick={nextStep}
            className="
              bg-blue-600 text-white
              px-4 py-2 text-sm
              sm:px-5 sm:py-2 sm:text-base
              rounded-md 
              flex items-center justify-center gap-2 
              w-full sm:w-auto
              hover:bg-blue-700
            "
          >
            Next
            <ArrowRightCircleIcon size={20} />
          </button>

        </div>
      </div>

    </div>
  );
};

export default UnitConstitution;
