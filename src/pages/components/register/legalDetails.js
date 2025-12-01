import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const LegalDetails = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6 p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Legal Details</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Udyam / IEM Registration No. <span>*</span>
          </label>
          <input
            type="text"
            name="udyam_registration_no"
            value={formData.udyam_registration_no}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            placeholder="Udyam / IEM Registration No."
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            GST No. <span>*</span>
          </label>
          <input
            type="text"
            name="gst_no"
            value={formData.gst_no}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            placeholder="GST No."
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Trading License No. <span>*</span>
          </label>
          <input
            type="text"
            name="trading_license_no"
            value={formData.trading_license_no}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            placeholder="Trading License No."
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Factory License No. <span>*</span>
          </label>
          <input
            type="text"
            name="factory_license_no"
            value={formData.factory_license_no}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            placeholder="Factory License No."
          />
        </div>
      </div>

      {/* Consent to Operate */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Consent to Operate / SPCB <span className="text-xs font-normal">(If Applicable)</span>
          </label>
          <input
            type="text"
            name="consdent_operate"
            value={formData.consdent_operate}
            placeholder="Consent to Operate / SPCB"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Any Other Registration */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Any Other Registration <span className="text-xs font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            name="other_registration"
            value={formData.other_registration}
            placeholder="Any Other Registration"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left: Back */}
        <div className="flex items-start md:items-center">
          <button
            onClick={prevStep}
            className="px-4 py-2 border rounded flex items-center gap-2 text-sm sm:text-base hover:bg-gray-100"
          >
            <ArrowLeftCircleIcon size={20} />
            Back
          </button>
        </div>

        {/* Right: Save + Next */}
        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={prevStep}
            className="px-4 py-2 text-sm sm:text-base border border-gray-400 rounded-md text-gray-700 bg-white flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100"
          >
            Save as Draft
          </button>

          <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded-md flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-blue-700"
          >
            Next
            <ArrowRightCircleIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalDetails;
