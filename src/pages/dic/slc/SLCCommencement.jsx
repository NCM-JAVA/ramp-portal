import React from "react";

const SLCCommencement = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        SLC Commencement Authentication
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Verified Commencement Date
          </label>
          <input
            type="date"
            className="h-10 px-3 border rounded text-sm
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Final Decision
          </label>
          <select
            className="h-10 px-3 border rounded text-sm bg-white
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Approved</option>
            <option>Rejected</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Sanction Number
          </label>
          <input
            type="text"
            placeholder="Enter sanction number"
            className="h-10 px-3 border rounded text-sm
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Remarks
          </label>
          <textarea
            rows={3}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm "
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <PrimaryButton text="Approve & Issue Order" />
        <SecondaryButton text="Generates PDF" />
        <SecondaryButton text="Flags application" />
        <SecondaryButton text="Reject" />
        <SecondaryButton text="Download Order" />
      </div>
    </div>
  );
}

export default SLCCommencement;

/* ---------- Buttons ---------- */

const PrimaryButton = ({ text }) => (
  <button
    className="px-5 py-2 bg-orange-600 hover:bg-orange-700
               text-white rounded-lg text-sm shadow"
  >
    {text}
  </button>
);

const SecondaryButton = ({ text }) => (
  <button
    className="px-5 py-2 bg-orange-200 hover:bg-orange-300
               text-orange-700 rounded-lg text-sm"
  >
    {text}
  </button>
);
