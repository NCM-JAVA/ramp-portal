import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import SchemeApplication from "../../../components/entrepreneur/schemeApplicationForm/SchemeApplicationForm";
import DocumentUpload from "../../../components/entrepreneur/schemeApplicationForm/DocumentUpload";
import ProgressBar from "../../../components/entrepreneur/schemeApplicationForm/ProgressBar";
import ApplicationPreview from "../../../components/entrepreneur/schemeApplicationForm/ApplicationPreview";
import SubmissionSuccess from "../../../components/entrepreneur/schemeApplicationForm/SubmissionSuccess";

const SchemeApplicationForm = () => {
    const { setPageTitle, setPageSubTitle, setBackButton, setActionButton } = useOutletContext();
    const { id } = useParams();
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        unit_name: "ABC Industries",
        gstin: "22ABCDE1234F1Z5",
        udyam_no: "2316232",
        unit_address: "New Delhi",
        investment_amount: "",
        employment_commitment: "",
        power_details: "",
        tax_details: ""
    });

    const [uploadedDocs, setUploadedDocs] = useState({});
    const documentsConfig = [
        { key: "gst_certificate", name: "GST Certificate", mandatory: true },
        { key: "udyam_certificate", name: "Udyam Certificate", mandatory: true },
        { key: "bank_statement", name: "Bank Statement", mandatory: false },
    ];

    //   const [documents, setDocuments] = useState({
    //     gst_certificate: null,
    //     udyam_certificate: null,
    //     bank_statement: null,
    //   });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handleFileChange = (docKey, file) => {
        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Only PDF, JPG, PNG files are allowed");
            return;
        }

        setUploadedDocs((prev) => ({
            ...prev,
            [docKey]: file,
        }));
    };

    //   const validateUnitDetails = () => {
    //     let temp = {};
    //     let isValid = true;

    //     if (!formData.industrial_unit.trim()) {
    //       temp.industrial_unit = "Industrial unit is required";
    //       isValid = false;
    //     } else if (formData.industrial_unit.trim().length < 2) {
    //       temp.industrial_unit = "Industrial unit must be at least 2 characters";
    //       isValid = false;
    //     }

    //     if (formData.phone.trim()) {
    //       if (!/^\d+$/.test(formData.phone.trim())) {
    //         temp.phone = "Phone must contain digits only";
    //         isValid = false;
    //       } else if (!/^\d{10}$/.test(formData.phone.trim())) {
    //         temp.phone = "Phone must be exactly 10 digits";
    //         isValid = false;
    //       }
    //     }

    //     if (!formData.factory_address.trim()) {
    //       temp.factory_address = "Factory address is required";
    //       isValid = false;
    //     }

    //     if (!formData.po.trim()) {
    //       temp.po = "Post Office is required";
    //       isValid = false;
    //     }

    //     if (!formData.district.trim()) {
    //       temp.district = "District is required";
    //       isValid = false;
    //     }

    //     if (!formData.state.trim()) {
    //       temp.state = "State is required";
    //       isValid = false;
    //     }

    //     if (!formData.email.trim()) {
    //       temp.email = "Email is required";
    //       isValid = false;
    //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //       temp.email = "Enter a valid email";
    //       isValid = false;
    //     }

    //     if (!formData.agree) {
    //       temp.agree = "You must agree to continue";
    //       isValid = false;
    //     }

    //     setErrors(temp);
    //     return isValid;
    //   };

    useEffect(() => {
        setPageTitle("Incentive Application Form");
        // setPageSubTitle(`Scheme ID: ${id}`);
        setBackButton(null);
        setActionButton(null);
    }, [id]);

    const nextStep = () => {
        // if (step === 1 && !validateUnitDetails()) {
        //     return;
        // } else if (step === 2 && !validateUnitConstitution()) {
        //     return;
        // } else if (step === 3 && !validateOperationalPlan()) {
        //     return;
        // } else if (step === 4 && !validateLegalDetails()) {
        //     return;
        // } else if (step === 5 && !validateFinancials()) {
        //     return;
        // }

        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const renderStep = () => {
        const props = { formData, handleChange, nextStep, prevStep, errors, id };

        switch (step) {
            case 1: return <SchemeApplication {...props} />;
            case 2: return <DocumentUpload {...props} documentsConfig={documentsConfig} uploadedDocs={uploadedDocs} handleFileChange={handleFileChange} />;
            case 3: return <ApplicationPreview {...props} uploadedDocs={uploadedDocs} />;
            case 4: return <SubmissionSuccess {...props} />;
            // case 5: return <Financials {...props} />;
            // case 6: return <Employment {...props} />;
            // case 7: return <Declaration {...props} handleSubmit={handleSubmit} success={success} />;
            default: return null;
        }
    };

    return (
        <>
            {/* <div className="bg-white p-6 rounded-xl shadow overflow-x-auto"> */}
            <ProgressBar step={step} />
            {renderStep()}
            {/* </div> */}
        </>
    );
};

export default SchemeApplicationForm;
