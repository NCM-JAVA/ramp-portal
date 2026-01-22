import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const Employment = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-2 p-2 sm:p-2">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black-600">Employment Generation</h2>

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
                <td className="border px-4 py-2 font-medium">
                  <div className="flex items-start justify-between gap-4">

                    <span className="whitespace-nowrap">APST</span>
                    <div className="divide-y divide-gray-300 text-right">
                      <label className="block text-xs font-semibold text-gray-600 py-1">
                        Male
                      </label>
                      <label className="block text-xs font-semibold text-gray-600 py-1">
                        Female
                      </label>
                    </div>

                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_male_managerial"
                        value={formData?.apst_male_managerial ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_managerial"
                        value={formData?.apst_female_managerial ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>


                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_supervisory"
                        value={formData?.apst_male_supervisory ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_supervisory"
                        value={formData?.apst_female_supervisory ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_male_skilled"
                        value={formData?.apst_male_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_skilled"
                        value={formData?.apst_female_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_male_semi_skilled"
                        value={formData?.apst_male_semi_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_semi_skilled"
                        value={formData?.apst_female_semi_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_male_unskilled"
                        value={formData?.apst_male_unskilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_unskilled"
                        value={formData?.apst_female_unskilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="apst_male_others"
                        value={formData?.apst_male_others ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="apst_female_others"
                        value={formData?.apst_female_others ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-4 py-2">
                  <div className="flex items-start justify-between gap-4">

                    <span className="whitespace-nowrap">NONAPST</span>
                    <div className="divide-y divide-gray-300 text-right">
                      <label className="block text-xs font-semibold text-gray-600 py-1">
                        Male
                      </label>
                      <label className="block text-xs font-semibold text-gray-600 py-1">
                        Female
                      </label>
                    </div>

                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_managerial"
                        value={formData?.nonapst_male_managerial ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_managerial"
                        value={formData?.nonapst_female_managerial ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_supervisory"
                        value={formData?.nonapst_male_supervisory ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_supervisory"
                        value={formData?.nonapst_female_supervisory ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_skilled"
                        value={formData?.nonapst_male_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_skilled"
                        value={formData?.nonapst_female_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_semi_skilled"
                        value={formData?.nonapst_male_semi_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_semi_skilled"
                        value={formData?.nonapst_female_semi_skilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_unskilled"
                        value={formData?.nonapst_male_unskilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_unskilled"
                        value={formData?.nonapst_female_unskilled ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
                </td>

                <td className="border px-4 py-2">
                  <div className="divide-y divide-gray-300">
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="male"
                        name="nonapst_male_others"
                        value={formData?.nonapst_male_others ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="female"
                        name="nonapst_female_others"
                        value={formData?.nonapst_female_others ?? ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>
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

export default Employment;
