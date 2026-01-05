import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, resetRegistrationState } from "../../redux/slice/AuthSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UnitDetails from "../../components/register/UnitDetails";
import UnitConstitution from "../../components/register/UnitConstitution";
import OperationalPlan from "../../components/register/OperationalPlan";
import LegalDetails from "../../components/register/LegalDetails";
import Financials from "../../components/register/Financials";
import Employment from "../../components/register/Employment";
import Declaration from "../../components/register/Declaration";
import ProgressBar from "../../components/register/ProgressBar";
import MainLayout from "../../components/layouts/MainLayout";
import {
    unitDetailsValidationSchema,
    unitConstitutionValidationSchema,
    operationalPlanValidationSchema,
    legalDetailsValidationSchema,
    financialsValidationSchema,
    declarationValidationSchema,
} from "../../validations/schemas";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error: registerError } = useSelector((state) => state.auth);
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);
    const totalSteps = 7;

    // Initial values for all steps
    const initialValues = {
        // Unit Details
        industrial_unit: "",
        phone: "",
        factory_address: "",
        po: "",
        district: "",
        state: "",
        email: "",
        agree: false,

        // Unit Constitution
        constitution_type: "",
        partners: "",
        address: "",
        aadhar_document: null,
        pan_document: null,

        // Operational Plan
        date_of_commencement: "",
        industry_type: "",
        new_unit: false,
        activity_type: "",
        product_name: "",
        power_requirement: "",
        power_requirement_unit: "",
        load_sanction_certificate: null,
        annual_production_capacity: "",
        annual_production_quantity: "",
        annual_production_value: "",
        major_raw_material: "",

        // Legal Details
        udyam_registration_no: "",
        gst_no: "",
        trading_license_no: "",
        factory_license_no: "",
        consent_operate: "",
        gst_document: null,
        factory_license_document: null,

        // Financials
        land: "",
        site_development: "",
        factory_building: "",
        office_building: "",
        plant_machinary: "",
        electrical_installation: "",
        preliminary_expenses: "",
        miscellaneous_fixed_assets: "",
        total_financial: "",

        // Employment (optional fields)
        apst_managerial: "",
        apst_supervisory: "",
        apst_skilled: "",
        apst_semi_skilled: "",
        apst_unskilled: "",
        apst_others: "",
        nonapst_managerial: "",
        nonapst_supervisory: "",
        nonapst_skilled: "",
        nonapst_semi_skilled: "",
        nonapst_unskilled: "",
        nonapst_others: "",

        // Declaration
        full_name: "",
        signature: null,
        seal: null,
    };

    // Validation schema for each step
    const getValidationSchema = (currentStep) => {
        switch (currentStep) {
            case 1:
                return unitDetailsValidationSchema;
            case 2:
                return unitConstitutionValidationSchema;
            case 3:
                return operationalPlanValidationSchema;
            case 4:
                return legalDetailsValidationSchema;
            case 5:
                return financialsValidationSchema;
            case 6:
                return Yup.object({});
            case 7:
                return declarationValidationSchema;
            default:
                return Yup.object({});
        }
    };

    const handleNext = async (validateForm, setTouched, values) => {
        // Mark all fields as touched
        const touchedFields = {};
        Object.keys(values).forEach(key => {
            touchedFields[key] = true;
        });
        setTouched(touchedFields);
        const errors = await validateForm();
        if (Object.keys(errors).length === 0) {
            setStep((prev) => Math.min(prev + 1, totalSteps));
        } else {
            toast.error("Please fill all required fields correctly", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    const handleBack = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (values) => {
        const submitData = new FormData();
        Object.keys(values).forEach((key) => {
            if (
                key === "aadhar_document" ||
                key === "pan_document" ||
                key === "gst_document" ||
                key === "factory_license_document" ||
                key === "load_sanction_certificate" ||
                key === "signature" ||
                key === "seal"
            ) {
                if (values[key] && values[key] instanceof File) {
                    submitData.append(key, values[key]);
                }
            } else {
                submitData.append(key, values[key] || "");
            }
        });

        try {
            const resultAction = await dispatch(registerUser(submitData));

            if (registerUser.fulfilled.match(resultAction)) {
                setSuccess(true);
                toast.success("Registration successful! Redirecting to login...", {
                    position: "top-right",
                    autoClose: 3000,
                });

                setTimeout(() => {
                    dispatch(resetRegistrationState());
                    navigate("/auth/login");
                }, 3000);
            } else {
                toast.error(
                    resultAction.payload?.message || "Registration failed. Please try again.",
                    {
                        position: "top-right",
                        autoClose: 5000,
                    }
                );
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    const renderStep = (formikProps) => {
        const { values, setFieldValue, validateForm, setTouched, errors, touched } = formikProps;

        switch (step) {
            case 1:
                return (
                    <UnitDetails
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        errors={errors}
                        touched={touched}
                    />
                );
            case 2:
                return (
                    <UnitConstitution
                        formData={values}
                        handleFileChange={(e) => setFieldValue(e.target.name, e.target.files[0])}
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        handleBack={handleBack}
                        errors={errors}
                        touched={touched}
                    />
                );
            case 3:
                return (
                    <OperationalPlan
                        handleFileChange={(e) => setFieldValue(e.target.name, e.target.files[0])}
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        handleBack={handleBack}
                        errors={errors}
                        touched={touched}
                    />
                );
            case 4:
                return (
                    <LegalDetails
                        formData={values}
                        handleFileChange={(e) => setFieldValue(e.target.name, e.target.files[0])}
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        handleBack={handleBack}
                        errors={errors}
                        touched={touched}
                    />
                );
            case 5:
                return (
                    <Financials
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        handleBack={handleBack}
                        errors={errors}
                        touched={touched}
                    />
                );
            case 6:
                return (
                    <Employment
                        handleNext={() => handleNext(validateForm, setTouched, values)}
                        handleBack={handleBack}
                    />
                );
            case 7:
                return (
                    <Declaration
                        handleFileChange={(e) => setFieldValue(e.target.name, e.target.files[0])}
                        handleSubmit={formikProps.handleSubmit}
                        handleBack={handleBack}
                        loading={loading}
                        errors={errors}
                        touched={touched}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <div className="flex justify-center items-center bg-gray-100 px-4 py-6">
                <div className="bg-white shadow-xl w-full max-w-5xl p-6 sm:p-10 rounded-3xl border border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
                        Industrial Unit Registration
                    </h2>
                    <p className="text-center font-semibold text-orange-600 mb-6 text-xs sm:text-sm">
                        Complete all steps to register your industrial unit
                    </p>

                    <ProgressBar currentStep={step} totalSteps={totalSteps} />

                    {registerError && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-300">
                            {typeof registerError === "string"
                                ? registerError
                                : registerError.message || "Registration failed"}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm mb-4 border border-green-300">
                            Registration successful! Redirecting to login...
                        </div>
                    )}

                    <Formik
                        initialValues={initialValues}
                        validationSchema={getValidationSchema(step)}
                        onSubmit={handleSubmit}
                        validateOnChange={true}
                        validateOnBlur={true}
                    >
                        {(formikProps) => <Form>{renderStep(formikProps)}</Form>}
                    </Formik>
                </div>
            </div>
        </MainLayout>
    );
};

export default Register;
