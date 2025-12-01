import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const Employment = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6 p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Employment Generation</h2>

      <div className="grid grid-cols-1 gap-6">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[900px] w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Category</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Managerial</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Supervisory</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Skilled</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Semi-skilled</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Unskilled</th>
                <th className="border px-4 py-2 text-left text-sm sm:text-base">Others</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">APST</td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_managerial"
                    value={formData?.apst_managerial ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_supervisory"
                    value={formData?.apst_supervisory ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_skilled"
                    value={formData?.apst_skilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_semi_skilled"
                    value={formData?.apst_semi_skilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_unskilled"
                    value={formData?.apst_unskilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="apst_others"
                    value={formData?.apst_others ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-4 py-2">NONAPST</td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_managerial"
                    value={formData?.nonapst_managerial ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_supervisory"
                    value={formData?.nonapst_supervisory ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_skilled"
                    value={formData?.nonapst_skilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_semi_skilled"
                    value={formData?.nonapst_semi_skilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_unskilled"
                    value={formData?.nonapst_unskilled ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>

                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="nonapst_others"
                    value={formData?.nonapst_others ?? ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

export default Employment;
