import React from "react";

const CommencementQueue = () => {

    return (
        <>

            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                <h3 className="text-lg font-semibold pb-1">Commencement Verification — REG-2025-1001</h3>
                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">Document Verification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input label="Unit Name" value="Alpine Crafts" />
                        <Input label="APIDIP Reg. No" value="REG-2025-1001" />
                        <Input label="Proposed Commencement" value="From Form I" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Input
                            label="Actual Commencement"
                            value="Submitted by applicant"
                            className="md:col-span-1"
                        />
                        <Input label="Days Variation" value="Auto-calculated" />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">Document Verification</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border rounded-lg overflow-hidden">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="p-3 text-left">Document</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Remarks</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow doc="Form X/XI" status="Valid / Invalid" action="view" />
                                <TableRow doc="First Invoice" status="Valid / Invalid" action="view" />
                                <TableRow doc="Photos" status="Complete / Incomplete" action="Carousel" />
                                <TableRow doc="Electricity Proof" status="Optional" action="view" />
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-6">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        DIC Action
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Select label="Require Field Inspection?" />
                        <Select label="Assign Inspection Officer" />
                        <TextArea label="Remarks" />
                    </div>
                </section>


                <div className="flex flex-wrap gap-3">
                    <PrimaryButton text="Forward for Inspection" />
                    <SecondaryButton text="Moves to Field Officer" />
                    <SecondaryButton text="Return for Clarification" />
                    <SecondaryButton text="Sends query to applicant" />
                    <SecondaryButton text="Reject" />
                    <SecondaryButton text="Ends workflow" />
                    <SecondaryButton text="Save Draft" />
                </div>
            </div>
        </>
    );
}

export default CommencementQueue;


const Input = ({ label, value, className = "" }) => (
    <div className={`flex flex-col ${className}`}>
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <input
            value={value}
            readOnly
            className="h-10 px-3 border rounded text-sm
        bg-orange-50 text-gray-800
        border-orange-200
        focus:outline-none
        cursor-not-allowed"
        />
    </div>
);

const Select = ({ label }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base">
            <option>-- Yes --</option>
            <option>No</option>
        </select>
    </div>
);

const TextArea = ({ label }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <textarea
            rows={2}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
        />
    </div>
);

const TableRow = ({ doc, status, action }) => (
    <tr className="border-t odd:bg-white even:bg-gray-50 hover:bg-orange-50 transition">
        <td className="p-3">{doc}</td>
        <td className="p-3">{status}</td>
        <td className="p-3">-</td>
        <td className="p-3">
            <button className="px-3 py-1 bg-orange-200 hover:bg-orange-300 hover:text-orange-800 text-orange-700 rounded-lg text-sm shadow">
                {action}
            </button>
        </td>
    </tr>
);

const PrimaryButton = ({ text }) => (
  <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm shadow">
    {text}
  </button>
);

const SecondaryButton = ({ text }) => (
  <button className="px-4 py-2 bg-orange-200 hover:bg-orange-300 text-orange-700 rounded-lg text-sm">
    {text}
  </button>
);