const IncentiveApplicationForm = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-8">

      {/* Incentive Selection */}
      <div>
        <h3 className="text-lg font-semibold">Incentive Selection</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Name of incentive applied for:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Application Type:</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="app_type" value="New Unit" className="h-4 w-4" />
                New Unit
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="app_type" value="Expansion Unit" className="h-4 w-4" />
                Expansion Unit
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Unit Information */}
      <div>
        <h3 className="text-lg font-semibold">Basic Unit Information</h3>
        <p className="text-xs text-gray-500 mb-4">
          Note: These fields are auto-populated from the Registration-Master Data
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left */}
          <div>
            <label className="text-sm font-medium text-gray-700">Name of the unit:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Factory Address:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Constitution:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Udyog/EM No.:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">GSTIN:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">AFSDF Registration No.:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">DIC:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">PAN No.:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Auto-populated" />
          </div>
        </div>
      </div>

      {/* Unit Specifics */}
      <div>
        <h3 className="text-lg font-semibold">Unit Specifics</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm">Date of Commencement (Commercial Production):</label>
            <input type="date" className="w-full p-2 border rounded text-sm" />
          </div>

          <div>
            <label className="text-sm">Land Ownership Type:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" />
          </div>

          <div>
            <label className="text-sm">LPGI Latest Achievement No.:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" />
          </div>

          <div>
            <label className="text-sm">Date of Deed/Order:</label>
            <input type="date" className="w-full p-2 border rounded text-sm" />
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div>
        <h3 className="text-lg font-semibold">Financial Details (Actual or Claim)</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm">Total Fixed Capital Investment:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter amount" />
          </div>

          <div>
            <label className="text-sm">Amount of Incentive Claimed (In Rupees):</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter amount" />
          </div>

          <div>
            <label className="text-sm">Loan Sanctioned?</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="loan" className="h-4 w-4" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="loan" className="h-4 w-4" />
                No
              </label>
            </div>
          </div>

          <div>
            <label className="text-sm">Loan Amount (if Yes):</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter amount" />
          </div>

          <div>
            <label className="text-sm">Bank Name:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter bank name" />
          </div>

          <div>
            <label className="text-sm">Account Number:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter account number" />
          </div>

          <div>
            <label className="text-sm">IFSC Code:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter IFSC code" />
          </div>

          <div>
            <label className="text-sm">Branch Name:</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Enter branch name" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Upload Documents
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default IncentiveApplicationForm;
