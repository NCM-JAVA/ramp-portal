import html2pdf from "html2pdf.js";
import { ArrowLeft, CheckCircle, Download, XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegistrationApplicationPDF from "../../../components/dic/RegistrationApplicationPDF";

const RegistrationApplicationView = () => {

    const { unitId } = useParams();
    const navigate = useNavigate();
    const [openReject, setOpenReject] = useState(false);
    const [remarks, setRemarks] = useState("");
    const [openApprove, setOpenApprove] = useState(false);

    const unitRegistrationData = [
        {
            unitId: "UNIT-2025-001",
            unitName: "ABC Private Manufactoring Pvt Ltd",
            facLocation: "New Delhi",
            facPS: "201301",
            facDistrict: "Tawang",
            facState: "Arunachal Pradesh",
            facMobile: "+91 89898765434",
            facEmail: "anshu.kumar@netcreativemind.com",
            officeLocation: "Tawang",
            officePS: "201301",
            officeDistrict: "Tawang",
            officeState: "Arunachal Pradesh",
            officeMobile: "+91 7876545654",
            officeEmail: "arunachal@gmail.com",

            constitutionType: "Private Limited Company",
            constitutionImage: "",
            director: "ABC",
            address: "",
            aadharDocument: "",
            panDocument: "",

            commencementDate: "25-12-2025",
            industryType: "Manufacturing",
            newUnit: "Yes",
            activityType: "",
            productName: "",
            powerRequirement: "100",
            powerRequirementUnit: "KW",
            loadSanctionCertificate: "",
            annualProductionCapacity: "2000",
            annualProductionCapacityQty: "1000",
            annualProductionCapacityValue: "1500",
            majorRawMaterial: "",

            udyamRegNumber: "UDYAM-AR-01-0012345",
            udyamRegDoc: "",
            gstRegNo: "12AGBVFFDF232JSD",
            gstRegDoc: "",
            tradingLicenseNo: "",
            tradingLicenseDoc: "",
            statePollutionBoard: "",
            statePollutionBoardDoc: "",
            factoryLicenseNo: "",
            factoryLicenseDoc: "",

            land: "1200000",
            siteDevelopment: "13000",
            factoryBuilding: "123000",
            officeBuilding: "10000",
            plantMachinary: "12000",
            electricalInstall: "30000",
            preliminaryExpenses: "90000",
            miscellaneousAmount: "190000",
            totalAmount: "2000000",

            fullName: "Anshu Kumar Singh",
            signature: "anshusingh",
            signatureFile: "",
            seal: "",

            registrationDate: "1 Dec 2025",
            status: "Pending"
        }
    ];

    const unitRegData = unitRegistrationData.find(
        (item) => item.unitId === unitId
    );

    const handleDownload = () => {
        const element = document.getElementById("pdf-content");

        element.classList.remove("hidden");

        const options = {
            margin: 0.5,
            filename: `Unit_Registration_${unitId}.pdf`,
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(options).from(element).save().then(() => {
            element.classList.add("hidden");
        });
    };


    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                <div className="flex items-center mb-4" >
                    <h3 className="text-lg font-semibold">
                        Unit Registration Application Details - <span className="text-orange-600">{unitId}</span>
                    </h3>

                    <div className="flex items-center gap-2 mx-auto">

                        <button
                            onClick={() => setOpenApprove(true)}
                            title="Approve Application"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                                bg-green-50 hover:bg-green-100 text-green-700 text-sm"
                        >
                            <CheckCircle className="w-4 h-4" />
                            Approve for Registration
                        </button>

                        <button
                            onClick={() => handleDownload()}
                            title="Download Application"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                                bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </button>

                        <button
                            onClick={() => setOpenReject(true)}
                            title="Reject Application"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                                bg-red-50 hover:bg-red-100 text-red-700 text-sm"
                        >
                            <XCircle className="w-4 h-4" />
                            Return to Applicant
                        </button>

                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="ml-auto p-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-md"
                        title="Back"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </div>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Unit Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                        <Detail label="Name of Industrial Unit & Location" value={unitRegData?.unitName} />
                        <Detail label="Registration Date" value={unitRegData?.registrationDate} />
                        <Detail label="Registration Apllication Status" value={unitRegData?.status} isStatus />
                    </div>

                    <h6 className="pb-1 text-orange-600 font-semibold">Unit / Factory Address</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <Detail label="Location" value={unitRegData?.facLocation} />
                        <Detail label="Police Station / Post Office" value={unitRegData?.facPS} />
                        <Detail label="District" value={unitRegData?.facDistrict} />
                        <Detail label="State" value={unitRegData?.facState} />
                        <Detail label="Registered Mobile Number" value={unitRegData?.facMobile} />
                        <Detail label="Registered Email Address" value={unitRegData?.facEmail} />
                    </div>

                    <h6 className="pb-1 pt-3 text-orange-600 font-semibold">Office Address</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <Detail label="Name of Industrial Unit & Location" value={unitRegData?.officeLocation} />
                        <Detail label="Application Date" value={unitRegData?.officePS} />
                        <Detail label="Status" value={unitRegData?.officeDistrict} />
                        <Detail label="Status" value={unitRegData?.officeState} />
                        <Detail label="Status" value={unitRegData?.officeMobile} />
                        <Detail label="Status" value={unitRegData?.officeEmail} />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Unit Constitution
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                        <Detail label="Constitution Type" value={unitRegData?.constitutionType} />
                        <Detail label="Constitution Document" value={unitRegData?.constitutionImage} />
                        <Detail label="Proprietor / Partners / Directors" value={unitRegData?.director} />
                        <Detail label="Proprietor / Partners / Directors Address" value={unitRegData?.address} />
                        <Detail label="Aadhar Document" value={unitRegData?.aadharDocument} />
                        <Detail label="PAN Document" value={unitRegData?.panDocument} />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Operational Plan
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                        <Detail label="Proposed Date of Commencement" value={unitRegData?.commencementDate} />
                        <Detail label="Type of Industry" value={unitRegData?.industryType} />
                        <Detail label="New Unit" value={unitRegData?.newUnit} />
                        <Detail label="Type of Activity" value={unitRegData?.activityType} />
                        <Detail label="Name of Product/Service" value={unitRegData?.productName} />
                        <Detail label="Power Requirement" value={unitRegData?.powerRequirement} />
                        <Detail label="Power Requirement Unit" value={unitRegData?.powerRequirementUnit} />
                        <Detail label="Load Sanction Certificate " value={unitRegData?.loadSanctionCertificate} />
                        <Detail label="Annual Production Capacity" value={unitRegData?.annualProductionCapacity} />
                        <Detail label="Annual Production Capacity Quantity" value={unitRegData?.annualProductionCapacityQty} />
                        <Detail label="Annual Production Capacity Value" value={unitRegData?.annualProductionCapacityValue} />
                        <Detail label="Major Raw Material" value={unitRegData?.majorRawMaterial} />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Legal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                        <Detail label="Udyam / IEM Registration No." value={unitRegData?.udyamRegNumber} />
                        <Detail label="Udyam / IEM Document" value={unitRegData?.udyamRegDoc} />
                        <Detail label="GST Number" value={unitRegData?.gstRegNo} />
                        <Detail label="GST Document" value={unitRegData?.gstRegDoc} />
                        <Detail label="Trading License Number" value={unitRegData?.tradingLicenseNo} />
                        <Detail label="Trading License Document" value={unitRegData?.tradingLicenseDoc} />
                        <Detail label="Consent to operate/establish from State Pollution Board No." value={unitRegData?.statePollutionBoard} />
                        <Detail label="Consent to operate/establish from State Pollution Board Document Upload" value={unitRegData?.statePollutionBoardDoc} />
                        <Detail label="Factory License Number" value={unitRegData?.factoryLicenseNo} />
                        <Detail label="Factory License Document" value={unitRegData?.factoryLicenseDoc} />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Fixed Capital Investment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                        <Detail label="Land (Rupees)" value={unitRegData?.land} />
                        <Detail label="Site Development (Rupees)" value={unitRegData?.siteDevelopment} />

                    </div>

                    <h6 className="text-orange-600 font-semibold">Buildings</h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <Detail label="Factory Building (Rupees)" value={unitRegData?.land} />
                        <Detail label="Office Building (Rupees)" value={unitRegData?.officeBuilding} />
                        <Detail label="Plant & Machinery (Rupees)" value={unitRegData?.plantMachinary} />
                        <Detail label="Electrical Installation (Rupees)" value={unitRegData?.electricalInstall} />
                        <Detail label="Preliminary & Pre-operative Expenses (Rupees)" value={unitRegData?.preliminaryExpenses} />
                        <Detail label="Miscellaneous Fixed Assets (Rupees)" value={unitRegData?.miscellaneousAmount} />
                        <Detail label="Total (Rupees)" value={unitRegData?.totalAmount} />
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                        Declaration
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pb-5">
                        <Detail label="Full Name" value={unitRegData?.fullName} />
                        <Detail label="Signature" value={unitRegData?.signature} />
                        <Detail label="Signature Document" value={unitRegData?.signatureFile} />
                        <Detail label="Seal" value={unitRegData?.seal} />
                    </div>
                </section>

                {openReject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Return to Applicant
                            </h3>

                            <textarea
                                rows={4}
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Enter remarks..."
                                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            />

                            <div className="flex justify-end gap-3 mt-5">
                                <button
                                    onClick={() => setOpenReject(false)}
                                    className="px-4 py-2 text-sm bg-orange-100 hover:bg-orange-200 rounded-md"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => {
                                        if (!remarks.trim()) {
                                            alert("Remarks are required");
                                            return;
                                        }

                                        console.log("Rejected with remarks:", remarks);

                                        setOpenReject(false);
                                        setRemarks("");
                                    }}
                                    className="px-4 py-2 text-sm bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                                >
                                    Return to Applicant
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {openApprove && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">
                            <h3 className="text-lg font-semibold mb-3">
                                Approve for Registration
                            </h3>

                            <p className="text-sm text-gray-600 mb-5">
                                Are you sure, you want to register the application?
                            </p>

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setOpenApprove(false)}
                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => {
                                        console.log("Application Approved");
                                        setOpenApprove(false);
                                        navigate(`/dic/registered-application/approve-registration-application/${unitId}`,
                                            {
                                                state: {
                                                    fullName: unitRegData.fullName,
                                                    dicName: "District Industries Centre, Tawang",
                                                    registrationNo: "DIC/123/APIDIP/2025",
                                                    registrationDate: unitRegData.registrationDate,
                                                    place: unitRegData.facDistrict,
                                                },
                                            }
                                        );
                                    }}
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                                >
                                    Approve for Registration
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Download PDF  */}
                <RegistrationApplicationPDF unitId={unitId} unitRegData={unitRegData} />

            </div>
        </>
    );
}

export default RegistrationApplicationView;

const statusClasses = {
    Pending: "bg-orange-100 text-orange-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700"
};

const Detail = ({ label, value, isStatus }) => (
    <div>
        <p className="text-gray-500 text-sm pb-1">{label}</p>
        {isStatus ? (
            <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
            ${statusClasses[value] || "bg-gray-100 text-gray-700"}
          `}
            >
                {value}
            </span>
        ) : (
            <p className="font-medium text-gray-800">{value || "-"}</p>
        )}
    </div>
);


