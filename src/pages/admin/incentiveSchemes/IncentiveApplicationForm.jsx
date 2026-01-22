import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Send, Upload } from "lucide-react";
import { toast } from "react-toastify";
import IncentiveDocumentUpload from "../../../components/admin/incentiveSchemes/IncentiveDocumentUpload";

const IncentiveApplicationForm = () => {

  const [open, setOpen] = useState(false);
  const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setPageTitle("Incentive Schemes");
    setPageSubTitle("Apply for Incentive Schemes");
    setBackButton(null);
    setActionButton(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // your validations
    // if (!formData.factory_address_line_one) {
    //     toast.error("Please fill required fields!");
    //     return;
    // }

    // After successful submit:
    toast.success("Application submitted successfully!");

    // Optional: clear form
    // setFormData({});
  };

  return (
    <>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Incentive Selection</h3>
        <form className="space-y-1" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name of incentive applied for</label>
              <input
                type="text"
                name="applied_incentive_name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter name of incentive applied for"
              />

              <div className="h-5">
                {errors.applied_incentive_name && (
                  <p className="text-red-600 text-[12px] font-bold">
                    {errors.applied_incentive_name}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Application Type</label>

              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="application_type"
                    value="Urban"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">New Unit</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="application_type"
                    value="Rural"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Expansion Unit</span>
                </label>
              </div>

              <div className="h-5">
                {errors.application_type && (
                  <p className="text-red-600 text-[12px] font-bold">
                    {errors.application_type}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Basic Unit Information</h3>
            {/* <p className="text-m font-semibold text-red-700"><i>Note: These fields are auto-populated from the Registration-Master Data</i></p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Name of the unit </label>
                <input
                  type="text"
                  name="unit_name"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.unit_name && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.unit_name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Factory Address</label>
                <input
                  type="text"
                  name="factory_address"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.factory_address && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.factory_address}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Constitution</label>
                <input
                  type="text"
                  name="constitution"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.constitution && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.constitution}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Udyog / EM Number</label>
                <input
                  type="text"
                  name="udyog_em_no"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.udyog_em_no && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.udyog_em_no}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.gstin && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.gstin}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">AFSDF Registration Number</label>
                <input
                  type="text"
                  name="afsdf_registration_no"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.afsdf_registration_no && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.afsdf_registration_no}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">DIC</label>
                <input
                  type="text"
                  name="dic"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.dic && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.dic}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">PAN Number</label>
                <input
                  type="text"
                  name="pan_no"
                  className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Auto-populated"
                  readOnly
                />
                <div className="h-5">
                  {errors.pan_no && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.pan_no}</p>
                  )}
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Claim Specifics</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Date of Commencement (Commercial Production)</label>
                <input
                  type="date"
                  name="commencement_date"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="h-5">
                  {errors.commencement_date && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.commencement_date}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Land Ownership Type</label>
                <input
                  type="text"
                  name="land_ownership_type"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter email id"
                />
                <div className="h-5">
                  {errors.land_ownership_type && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.land_ownership_type}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">LPGI Latest / Acievement Number</label>
                <input
                  type="text"
                  name="lpgi_achievement_no"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="h-5">
                  {errors.lpgi_achievement_no && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.lpgi_achievement_no}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Date of Deed / Order</label>
                <input
                  type="date"
                  name="order_date"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="h-5">
                  {errors.order_date && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.order_date}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  name="lpgi_achievement_no1"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="h-5">
                  {errors.lpgi_achievement_no1 && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.lpgi_achievement_no1}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="date"
                  name="order_date1"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <div className="h-5">
                  {errors.order_date1 && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.order_date1}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Financial Details (Actual or Claim)</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Total Fixed Capital Investment (in rupees)</label>
                <input
                  type="text"
                  name="total_fixed_capital_investment"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter Amount"
                />
                <div className="h-5">
                  {errors.total_fixed_capital_investment && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.total_fixed_capital_investment}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Amount of Incentive Claimed (in rupees)</label>
                <input
                  type="text"
                  name="incentive_claimed_amount"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter amount"
                />
                <div className="h-5">
                  {errors.incentive_claimed_amount && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.incentive_claimed_amount}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Loan Sanctioned?</label>

                <div className="flex items-center gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="loan_sanctioned"
                      value="yes"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Yes</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="loan_sanctioned"
                      value="no"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">No</span>
                  </label>
                </div>

                <div className="h-5">
                  {errors.loan_sanctioned && (
                    <p className="text-red-600 text-[12px] font-bold">
                      {errors.loan_sanctioned}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Loan Amount (if Yes)</label>
                <input
                  type="text"
                  name="loan_amount"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter amount"
                />
                <div className="h-5">
                  {errors.loan_amount && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.loan_amount}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  name="bank_name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter bank name"
                />
                <div className="h-5">
                  {errors.bank_name && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.bank_name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Account Number</label>
                <input
                  type="text"
                  name="account_number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter account number"
                />
                <div className="h-5">
                  {errors.account_number && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.account_number}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700">IFSC Code</label>
                <input
                  type="text"
                  name="ifsc_code"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter IFSC Code"
                />
                <div className="h-5">
                  {errors.ifsc_code && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.ifsc_code}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Branch Name</label>
                <input
                  type="text"
                  name="branch_name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter branch name"
                />
                <div className="h-5">
                  {errors.branch_name && (
                    <p className="text-red-600 text-[12px] font-bold">{errors.branch_name}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  flex items-center justify-center gap-2
                  bg-gradient-to-r from-blue-500 to-indigo-600
                  hover:from-blue-600 hover:to-indigo-700
                  text-white font-semibold py-2 px-4
                  rounded-lg shadow
                  transition-all duration-300 ease-in-out
                "
              >
                <Upload className="h-4 w-4" /> Upload Documents
              </button>

              <button
                type="submit"
                className="
                  flex items-center justify-center gap-2
                  bg-gradient-to-r from-green-500 to-emerald-600
                  hover:from-green-600 hover:to-emerald-700
                  text-white font-semibold py-2 px-4
                  rounded-lg shadow
                  transition-all duration-300 ease-in-out
                "
              >
                <Send className="h-4 w-4" />
                Submit Application
              </button>
            </div>


          </div>

        </form>
        {open && <IncentiveDocumentUpload onClose={() => setOpen(false)} />}

      </div>



    </>

  );
};

export default IncentiveApplicationForm;
