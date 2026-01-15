import React from "react";

const AuthenticationCertificate = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            <h3 className="text-lg font-semibold pb-1">
                Commencement Authentication Certificate (Preview)
            </h3>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Inspection verifies production; invoice mapped.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Input label="Unit Name" />
                    <Input label="District" />
                    <Input label="APIDIP Reg. No" />
                    <Input label="Authenticated Date of Commencement" />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Input label="Certificate Number" />
                <Input label="Issued By" value="Directorate or SLC" />
                <Input label="QR Code" value="For authenticity" />
            </div>

            <div>
                <PrimaryButton text="Download PDF" />
            </div>
        </div>
    );
};

export default AuthenticationCertificate;

/* ---------- Reusable Components ---------- */

const Input = ({ label, value = "" }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <input
            value={value}
            readOnly
            className="
        h-10 w-full px-3 border rounded
        text-sm bg-orange-50
        focus:outline-none cursor-not-allowed
      "
        />
    </div>
);

const PrimaryButton = ({ text }) => (
    <button
        className="
      px-6 py-2
      bg-orange-600 hover:bg-orange-700
      text-white text-sm font-medium
      rounded-lg shadow
      transition
    "
    >
        {text}
    </button>
);
