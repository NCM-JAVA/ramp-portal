import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const Financials = ({ formData, handleChange, nextStep, prevStep, errors }) => {

  const formatNumber = (value) => {
    if (!value) return "";
    const number = value.replace(/,/g, "");
    return Number(number).toLocaleString("en-IN");
  };

  const handleNumericChange = (e) => {
    const { name, value } = e.target;

    const rawValue = value.replace(/[^0-9]/g, "");
    const formattedValue = formatNumber(rawValue);

    handleChange({
      target: {
        name,
        value: formattedValue,
      },
    });
  };



  return (
    <div className="space-y-2 p-2 sm:p-2">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Fixed Capital Investment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Land (Rupees) <span>*</span></label>
          <input
            type="text"
            name="land"
            value={formData.land}
            onChange={handleNumericChange}
            placeholder="Land (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.land && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.land}
              </p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Site Development (Rupees) <span>*</span></label>
          <input
            type="text"
            name="site_development"
            value={formData.site_development}
            onChange={handleNumericChange}
            placeholder="Site Development (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.site_development && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.site_development}
              </p>
            )}
          </div>

        </div>
      </div>

      <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-orange-600 font-semibold border-b-2 border-orange-500 pb-1">Buildings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Factory Building (Rupees) <span>*</span></label>
          <input
            type="text"
            name="factory_building"
            value={formData.factory_building}
            onChange={handleNumericChange}
            placeholder="Factory Building (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.factory_building && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.factory_building}
              </p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Office Building (Rupees) <span>*</span></label>
          <input
            type="text"
            name="office_building"
            value={formData.office_building}
            onChange={handleNumericChange}
            placeholder="Office Building (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.office_building && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.office_building}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Plant & Machinery (Rupees) <span>*</span></label>
          <input
            type="text"
            name="plant_machinary"
            value={formData.plant_machinary}
            onChange={handleNumericChange}
            placeholder="Plant & Machinery (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.plant_machinary && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.plant_machinary}
              </p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Electrical Installation (Rupees) <span>*</span></label>
          <input
            type="text"
            name="electrical_installation"
            value={formData.electrical_installation}
            onChange={handleNumericChange}
            placeholder="Electrical Installation (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.electrical_installation && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.electrical_installation}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Preliminary & Pre-operative Expenses (Rupees) <span>*</span>
          </label>
          <input
            type="text"
            name="preliminary_expenses"
            value={formData.preliminary_expenses}
            onChange={handleNumericChange}
            placeholder="Preliminary & Pre-operative Expenses (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.preliminary_expenses && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.preliminary_expenses}
              </p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
            Miscellaneous Fixed Assets (Rupees) <span>*</span>
          </label>
          <input
            type="text"
            name="miscellaneous_fixed_assets"
            value={formData.miscellaneous_fixed_assets}
            onChange={handleNumericChange}
            placeholder="Miscellaneous Fixed Assets (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />

          <div className="h-5">
            {errors.miscellaneous_fixed_assets && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.miscellaneous_fixed_assets}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">Total (Rupees)</label>
          <input
            type="text"
            name="total_financial"
            value={formData.total_financial}
            placeholder="Total (Rupees)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base bg-orange-50 cursor-not-allowed"
            onChange={handleNumericChange}
            readOnly
          />

          <div className="h-5">
            {errors.total_financial && (
              <p className="text-red-600 text-[12px] font-bold">
                {errors.total_financial}
              </p>
            )}
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
    </div>
  );
};

export default Financials;
