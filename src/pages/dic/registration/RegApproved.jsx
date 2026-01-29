import html2pdf from "html2pdf.js";
import { ArrowLeft, Download, Upload } from "lucide-react";
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const RegApproved = () => {

    const { unitId } = useParams();
    const location = useLocation();
    const unitData = location.state;
    const navigate = useNavigate();
    const {
        fullName,
        dicName,
        registrationNo,
        registrationDate,
        place,
    } = unitData || {};


    const handleDownloadFormII = () => {
        const element = document.getElementById("certificate-pdf");
        element.classList.remove("hidden");

        if (!element) return;

        html2pdf()
            .set({
                filename: "Form-II-Registration-Certificate.pdf",
                margin: 0,
                image: { type: "jpeg", quality: 1 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            })
            .from(element)
            .save().then(() => {
                element.classList.add("hidden");
            });
    };

    const fileInputRef = useRef(null);
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        console.log("Selected PDF:", file);

        // 👇 Upload to server (optional)
        const formData = new FormData();
        formData.append("pdf", file);

        // Example: fetch("/api/upload", { method: "POST", body: formData })

        alert("PDF selected: " + file.name);
    };

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

                <div className="flex items-center mb-4" >
                    <h3 className="text-lg font-semibold">
                        Form II - <span className="text-orange-600">{unitId}</span>
                    </h3>

                    <div className="flex items-center gap-2 mx-auto">

                        <input
                                type="file"
                                accept="application/pdf"
                                ref={fileInputRef}
                                onChange={handleUpload}
                                className="hidden"
                            />
                        <button
                            onClick={() => fileInputRef.current.click()}
                            title="Approve Application"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                                bg-green-50 hover:bg-green-100 text-green-700 text-sm"
                        >
                            <Upload className="w-4 h-4" />
                            Upload Form II
                        </button>

                        <button
                            onClick={handleDownloadFormII}
                            title="Download Application"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md 
                                bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Download Form II
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

                <section className="mt-8 mb-12 flex justify-center ">
                    <div className="border-2 border-orange-500 h-full p-10">

                        <h2 className="text-center text-lg font-bold underline tracking-wide mb-12">
                            CERTIFICATE OF REGISTRATION UNDER APIDIP 2025
                        </h2>

                        <p className="text-base leading-8 text-justify mb-24">
                            M/S
                            <span className="inline-block border-b-2 border-dotted border-black w-64 mx-2 text-center font-semibold">
                                {fullName}
                            </span>
                            is hereby registered for availing incentives under
                            <span className="font-semibold">
                                {" "}Arunachal Pradesh Industrial Development & Investment Policy 2025
                            </span>
                            {" "}and the common registration number allotted to the units
                            {" "}
                            <span className="inline-block border-b-2 border-dotted border-black w-52 mx-2 text-center font-semibold">
                                {registrationNo}
                            </span>
                            {" "}dated
                            <span className="inline-block border-b-2 border-dotted border-black w-40 mx-2 text-center font-semibold">
                                {registrationDate}
                            </span>.
                        </p>

                        <div className="flex justify-between text-base mt-28">
                            <div>
                                <p>Place: <span className="font-semibold">{place}</span></p>
                                <p>Date: <span className="font-semibold">{registrationDate}</span></p>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold">JDI / DDI / ADI</p>
                                <p>District Industries Centre</p>
                                <p>(Name of the DIC)</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* PDF ONLY – DO NOT DISPLAY */}
                <div className="">
                    <div
                        id="certificate-pdf"
                        className="hidden pdf-a4 bg-white text-black mx-auto"
                    >
                        <div className="h-full p-10">

                            <h2 className="text-center text-lg font-bold underline tracking-wide mb-12">
                                CERTIFICATE OF REGISTRATION UNDER APIDIP 2025
                            </h2>

                            <p className="text-base leading-8 text-justify mb-24">
                                M/S
                                <span className="inline-block border-b-2 border-dotted border-black w-64 mx-2 text-center font-semibold">
                                    {fullName}
                                </span>
                                is hereby registered for availing incentives under
                                <span className="font-semibold">
                                    {" "}Arunachal Pradesh Industrial Development & Investment Policy 2025
                                </span>
                                {" "}and the common registration number allotted to the units
                                {" "}
                                <span className="inline-block border-b-2 border-dotted border-black w-52 mx-2 text-center font-semibold">
                                    {registrationNo}
                                </span>
                                {" "}dated
                                <span className="inline-block border-b-2 border-dotted border-black w-40 mx-2 text-center font-semibold">
                                    {registrationDate}
                                </span>.
                            </p>

                            <div className="flex justify-between text-base mt-28">
                                <div>
                                    <p>Place: <span className="font-semibold">{place}</span></p>
                                    <p>Date: <span className="font-semibold">{registrationDate}</span></p>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold">JDI / DDI / ADI</p>
                                    <p>District Industries Centre</p>
                                    <p>(Name of the DIC)</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default RegApproved;