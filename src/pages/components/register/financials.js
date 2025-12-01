import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const Financials = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6 p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Financials</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Land <span>*</span></label>
          <input
            type="text"
            name="land"
            value={formData.land}
            onChange={handleChange}
            placeholder="Land"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Site Development <span>*</span></label>
          <input
            type="text"
            name="site_development"
            value={formData.site_development}
            onChange={handleChange}
            placeholder="Site Development"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Factory Building <span>*</span></label>
          <input
            type="text"
            name="factory_building"
            value={formData.factory_building}
            onChange={handleChange}
            placeholder="Factory Building"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Office Building <span>*</span></label>
          <input
            type="text"
            name="office_building"
            value={formData.office_building}
            onChange={handleChange}
            placeholder="Office Building"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Plant & Machinery <span>*</span></label>
          <input
            type="text"
            name="plant_machinary"
            value={formData.plant_machinary}
            onChange={handleChange}
            placeholder="Plant & Machinery"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Electrical Installation <span>*</span></label>
          <input
            type="text"
            name="electrical_installation"
            value={formData.electrical_installation}
            onChange={handleChange}
            placeholder="Electrical Installation"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Preliminary & Pre-operative Expenses <span>*</span>
          </label>
          <input
            type="text"
            name="preliminary_expenses"
            value={formData.preliminary_expenses}
            onChange={handleChange}
            placeholder="Preliminary & Pre-operative Expenses"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Miscellaneous Fixed Assets <span>*</span>
          </label>
          <input
            type="text"
            name="miscellaneous_fixed_assets"
            value={formData.miscellaneous_fixed_assets}
            onChange={handleChange}
            placeholder="Miscellaneous Fixed Assets"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Total (readonly) */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Total <span className="text-xs font-normal">(Auto-calculated)</span></label>
          <input
            type="text"
            name="total_financial"
            value={formData.total_financial}
            placeholder="Total"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            onChange={handleChange}
            readOnly
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

export default Financials;
