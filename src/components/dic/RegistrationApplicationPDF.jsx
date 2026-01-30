const RegistrationApplicationPDF = ({ unitId, unitRegData }) => {
    return (
        <div id="pdf-content" className="hidden pdf-a4 bg-white text-gray-800">

            <div className="flex items-center mb-4" >
                <h3 className="text-lg font-semibold">
                    Unit Registration Application Details - <span className="text-orange-600">{unitId}</span>
                </h3>
            </div>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Unit Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                    <PDFDetail label="Name of Industrial Unit & Location" value={unitRegData?.unitName} />
                    <PDFDetail label="Registration Date" value={unitRegData?.registrationDate} />
                    <PDFDetail label="Registration Apllication Status" value={unitRegData?.status} isStatus />
                </div>

                <h6 className="pb-1 text-orange-600 font-semibold">Unit / Factory Address</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <PDFDetail label="Location" value={unitRegData?.facLocation} />
                    <PDFDetail label="Police Station / Post Office" value={unitRegData?.facPS} />
                    <PDFDetail label="District" value={unitRegData?.facDistrict} />
                    <PDFDetail label="State" value={unitRegData?.facState} />
                    <PDFDetail label="Registered Mobile Number" value={unitRegData?.facMobile} />
                    <PDFDetail label="Registered Email Address" value={unitRegData?.facEmail} />
                </div>

                <h6 className="pb-1 pt-3 text-orange-600 font-semibold">Office Address</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <PDFDetail label="Name of Industrial Unit & Location" value={unitRegData?.officeLocation} />
                    <PDFDetail label="Application Date" value={unitRegData?.officePS} />
                    <PDFDetail label="Status" value={unitRegData?.officeDistrict} />
                    <PDFDetail label="Status" value={unitRegData?.officeState} />
                    <PDFDetail label="Status" value={unitRegData?.officeMobile} />
                    <PDFDetail label="Status" value={unitRegData?.officeEmail} />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Unit Constitution
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                    <PDFDetail label="Constitution Type" value={unitRegData?.constitutionType} />
                    <PDFDetail label="Constitution Document" value={unitRegData?.constitutionImage} />
                    <PDFDetail label="Proprietor / Partners / Directors" value={unitRegData?.director} />
                    <PDFDetail label="Proprietor / Partners / Directors Address" value={unitRegData?.address} />
                    <PDFDetail label="Aadhar Document" value={unitRegData?.aadharDocument} />
                    <PDFDetail label="PAN Document" value={unitRegData?.panDocument} />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Operational Plan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                    <PDFDetail label="Proposed Date of Commencement" value={unitRegData?.commencementDate} />
                    <PDFDetail label="Type of Industry" value={unitRegData?.industryType} />
                    <PDFDetail label="New Unit" value={unitRegData?.newUnit} />
                    <PDFDetail label="Type of Activity" value={unitRegData?.activityType} />
                    <PDFDetail label="Name of Product/Service" value={unitRegData?.productName} />
                    <PDFDetail label="Power Requirement" value={unitRegData?.powerRequirement} />
                    <PDFDetail label="Power Requirement Unit" value={unitRegData?.powerRequirementUnit} />
                    <PDFDetail label="Load Sanction Certificate " value={unitRegData?.loadSanctionCertificate} />
                    <PDFDetail label="Annual Production Capacity" value={unitRegData?.annualProductionCapacity} />
                    <PDFDetail label="Annual Production Capacity Quantity" value={unitRegData?.annualProductionCapacityQty} />
                    <PDFDetail label="Annual Production Capacity Value" value={unitRegData?.annualProductionCapacityValue} />
                    <PDFDetail label="Major Raw Material" value={unitRegData?.majorRawMaterial} />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Legal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                    <PDFDetail label="Udyam / IEM Registration No." value={unitRegData?.udyamRegNumber} />
                    <PDFDetail label="Udyam / IEM Document" value={unitRegData?.udyamRegDoc} />
                    <PDFDetail label="GST Number" value={unitRegData?.gstRegNo} />
                    <PDFDetail label="GST Document" value={unitRegData?.gstRegDoc} />
                    <PDFDetail label="Trading License Number" value={unitRegData?.tradingLicenseNo} />
                    <PDFDetail label="Trading License Document" value={unitRegData?.tradingLicenseDoc} />
                    <PDFDetail label="Consent to operate/establish from State Pollution Board No." value={unitRegData?.statePollutionBoard} />
                    <PDFDetail label="Consent to operate/establish from State Pollution Board Document Upload" value={unitRegData?.statePollutionBoardDoc} />
                    <PDFDetail label="Factory License Number" value={unitRegData?.factoryLicenseNo} />
                    <PDFDetail label="Factory License Document" value={unitRegData?.factoryLicenseDoc} />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Fixed Capital Investment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                    <PDFDetail label="Land (Rupees)" value={unitRegData?.land} />
                    <PDFDetail label="Site Development (Rupees)" value={unitRegData?.siteDevelopment} />

                </div>

                <h6 className="text-orange-600 font-semibold">Buildings</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <PDFDetail label="Factory Building (Rupees)" value={unitRegData?.land} />
                    <PDFDetail label="Office Building (Rupees)" value={unitRegData?.officeBuilding} />
                    <PDFDetail label="Plant & Machinery (Rupees)" value={unitRegData?.plantMachinary} />
                    <PDFDetail label="Electrical Installation (Rupees)" value={unitRegData?.electricalInstall} />
                    <PDFDetail label="Preliminary & Pre-operative Expenses (Rupees)" value={unitRegData?.preliminaryExpenses} />
                    <PDFDetail label="Miscellaneous Fixed Assets (Rupees)" value={unitRegData?.miscellaneousAmount} />
                    <PDFDetail label="Total (Rupees)" value={unitRegData?.totalAmount} />
                </div>
            </section>

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Declaration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                    <PDFDetail label="Full Name" value={unitRegData?.fullName} />
                    <PDFDetail label="Signature" value={unitRegData?.signature} />
                    <PDFDetail label="Signature Document" value={unitRegData?.signatureFile} />
                    <PDFDetail label="Seal" value={unitRegData?.seal} />
                </div>
            </section>

        </div>
    );
};

export default RegistrationApplicationPDF;

const statusClasses = {
    pending: "bg-orange-100 text-orange-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
};

const PDFDetail = ({ label, value, isStatus }) => (
    <div>
        <p className="text-gray-500 text-sm pb-1">{label}</p>

        {isStatus ? (
            <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium
        ${statusClasses[value?.toLowerCase()] || "bg-gray-100 text-gray-700"}`}
            >
                {value?.charAt(0).toUpperCase() + value?.slice(1)}
            </span>
        ) : (
            <p className="font-medium text-gray-800">{value || "-"}</p>
        )}
    </div>
);

