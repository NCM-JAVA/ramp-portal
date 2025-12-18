import React, { useState, useEffect } from "react";
import UnitDetails from "../../components/register/UnitDetails";
import UnitConstitution from "../../components/register/UnitConstitution";
import OperationalPlan from "../../components/register/OperationalPlan";
import LegalDetails from "../../components/register/LegalDetails";
import Financials from "../../components/register/Financials";
import Employment from "../../components/register/Employment";
import Declaration from "../../components/register/Declaration";
import ProgressBar from "../../components/register/ProgressBar";
import MainLayout from "../../components/layouts/MainLayout";

const Register = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const totalSteps = 8;

  const [formData, setFormData] = useState({
    //Unit Details
    industrial_unit: "",
    phone: "",
    factory_address: "",
    po: "",
    district: "",
    state: "",
    email: "",

    //Unit Constitution
    constitution_type: "",
    partners: "",
    address: "",

    //Operational Plan
    date_of_commencement: "",
    industry_type: "",
    activity_type: "",
    product_name: "",
    power_requirement: "",
    power_requirement_unit: "",
    load_sanction_certificate: "",
    annual_production_capacity: "",
    annual_production_quantity: "",
    annual_production_value: "",
    major_raw_material: "",
    new_unit: "",

    //Legal Details
    udyam_registration_no: "",
    gst_no: "",
    trading_license_no: "",
    factory_license_no: "",
    consent_operate: "",
    other_registration: "",

    //Financials
    land: "",
    site_development: "",
    factory_building: "",
    office_building: "",
    plant_machinary: "",
    electrical_installation: "",
    preliminary_expenses: "",
    factory_license_no: "",
    miscellaneous_fixed_assets: "",
    total_financial: "",

    //Employment
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

    //Declaration
    new_unit: "", //checkbox
    full_name: "",
    signature: "",
    seal: ""

  });

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


  const validateUnitDetails = () => {
    let temp = {};
    let isValid = true;

    if (!formData.industrial_unit.trim()) {
      temp.industrial_unit = "Industrial unit is required";
      isValid = false;
    } else if (formData.industrial_unit.trim().length < 2) {
      temp.industrial_unit = "Industrial unit must be at least 2 characters";
      isValid = false;
    }

    if (formData.phone.trim()) {
      if (!/^\d+$/.test(formData.phone.trim())) {
        temp.phone = "Phone must contain digits only";
        isValid = false;
      } else if (!/^\d{10}$/.test(formData.phone.trim())) {
        temp.phone = "Phone must be exactly 10 digits";
        isValid = false;
      }
    }

    if (!formData.factory_address.trim()) {
      temp.factory_address = "Factory address is required";
      isValid = false;
    }

    if (!formData.po.trim()) {
      temp.po = "Post Office is required";
      isValid = false;
    }

    if (!formData.district.trim()) {
      temp.district = "District is required";
      isValid = false;
    }

    if (!formData.state.trim()) {
      temp.state = "State is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      temp.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      temp.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.agree) {
      temp.agree = "You must agree to continue";
      isValid = false;
    }

    setErrors(temp);
    return isValid;
  };

  const validateUnitConstitution = () => {
    let temp = {};
    let isValid = true;

    if (!formData.constitution_type.trim()) {
      temp.constitution_type = "Select Constitution type";
      isValid = false;
    }

    if (!formData.partners.trim()) {
      temp.partners = "Name of partners is required";
      isValid = false;
    }
    else if (formData.partners.trim().length < 2) {
      temp.partners = "Partners name must be minimum 2 characters";
      isValid = false;
    }

    if (!formData.address.trim()) {
      temp.address = "Address is required";
      isValid = false;
    }

    setErrors(temp);
    return isValid;
  };

  const validateOperationalPlan = () => {
    let temp = {};
    let isValid = true;

    if (!formData.date_of_commencement.trim()) {
      temp.date_of_commencement = "Date of commencement is required";
      isValid = false;
    }

    if (!formData.industry_type.trim()) {
      temp.industry_type = "Industry type is required";
      isValid = false;
    }

    if (!formData.new_unit) {
      temp.new_unit = "New unit is required";
      isValid = false;
    }

    if (!formData.activity_type.trim()) {
      temp.activity_type = "Activity type is required";
      isValid = false;
    }

    if (!formData.product_name.trim()) {
      temp.product_name = "Product name is required";
      isValid = false;
    }

    if (!formData.power_requirement.trim()) {
      temp.power_requirement = "Power requirement is required";
      isValid = false;
    }

    if (!formData.power_requirement_unit.trim()) {
      temp.power_requirement_unit = "Power requirement unit is required";
      isValid = false;
    }

    if (!formData.annual_production_capacity.trim()) {
      temp.annual_production_capacity = "Annual production capacity is required";
      isValid = false;
    }

    if (!formData.annual_production_quantity.trim()) {
      temp.annual_production_quantity = "Annual production quantity is required";
      isValid = false;
    }

    if (!formData.annual_production_value.trim()) {
      temp.annual_production_value = "Annual production value is required";
      isValid = false;
    }

    if (!formData.major_raw_material.trim()) {
      temp.major_raw_material = "Major raw material is required";
      isValid = false;
    }

    setErrors(temp);
    return isValid;
  }

  const validateLegalDetails = () => {
    let temp = {};
    let isValid = true;

    if (!formData.udyam_registration_no.trim()) {
      temp.udyam_registration_no = "Udyam registration field is required";
      isValid = false;
    }

    if (!formData.gst_no.trim()) {
      temp.gst_no = "GST Number field is required";
      isValid = false;
    }

    if (!formData.trading_license_no.trim()) {
      temp.trading_license_no = "Trading License Number field is required";
      isValid = false;
    }

    if (!formData.factory_license_no.trim()) {
      temp.factory_license_no = "Factory License Number field is required";
      isValid = false;
    }

    if (!formData.consent_operate.trim()) {
      temp.consent_operate = "Consent Operate field is required";
      isValid = false;
    }

    setErrors(temp);
    return isValid;
  }

  const validateFinancials = () => {
    let temp = {};
    let isValid = true;

    if (!formData.land.trim()) {
      temp.land = "Land field is required";
      isValid = false;
    }

    if (!formData.site_development.trim()) {
      temp.site_development = "Site Development field is required";
      isValid = false;
    }

    if (!formData.factory_building.trim()) {
      temp.factory_building = "Factory Building field is required";
      isValid = false;
    }

    if (!formData.office_building.trim()) {
      temp.office_building = "Office Building field is required";
      isValid = false;
    }

    if (!formData.plant_machinary.trim()) {
      temp.plant_machinary = "Plant Machinary field is required";
      isValid = false;
    }

    if (!formData.electrical_installation.trim()) {
      temp.electrical_installation = "Electrical Installation field is required";
      isValid = false;
    }

    if (!formData.preliminary_expenses.trim()) {
      temp.preliminary_expenses = "Preliminary expenses field is required";
      isValid = false;
    }

    if (!formData.factory_license_no.trim()) {
      temp.factory_license_no = "Factory license field is required";
      isValid = false;
    }

    if (!formData.miscellaneous_fixed_assets.trim()) {
      temp.miscellaneous_fixed_assets = "Miscellaneous fixed assets field is required";
      isValid = false;
    }

    // if(!formData.total_financial.trim()){
    //   temp.total_financial = "Total financial field is required";
    //   isValid = false;
    // }

    setErrors(temp);
    return isValid;
  }

  const validateDeclaration = () => {
    let temp = {};
    let isValid = true;

    if (!formData.new_unit) {
      temp.new_unit = "You must agree to the declaration";
      isValid = false;
    }

    if (!formData.full_name.trim()) {
      temp.full_name = "Full name is required";
      isValid = false;
    }

    if (!formData.signature.trim()) {
      temp.signature = "Signature is required";
      isValid = false;
    }

    // if (!formData.seal.trim()) {
    //   temp.seal = "Check box is required";
    //   isValid = false;
    // }

    setErrors(temp);
    return isValid;
  }

  const handleSubmit = () => {
    if(!validateDeclaration()){
      return;
    }
      
    setSuccess(true);

    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 5000);
  };


  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const nextStep = () => step < totalSteps && setStep(step + 1);
  // const prevStep = () => step > 1 && setStep(step - 1);

  const nextStep = () => {
    if (step === 1 && !validateUnitDetails()) {
      return;
    } else if (step === 2 && !validateUnitConstitution()) {
      return;
    } else if (step === 3 && !validateOperationalPlan()) {
      return;
    } else if (step === 4 && !validateLegalDetails()) {
      return;
    } else if (step === 5 && !validateFinancials()) {
      return;
    } 

    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    const props = { formData, handleChange, nextStep, prevStep, errors };

    switch (step) {
      case 1: return <UnitDetails {...props} />;
      case 2: return <UnitConstitution {...props} />;
      case 3: return <OperationalPlan {...props} />;
      case 4: return <LegalDetails {...props} />;
      case 5: return <Financials {...props} />;
      case 6: return <Employment {...props} />;
      case 7: return <Declaration {...props} handleSubmit={handleSubmit} success={success} />;
      default: return null;
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center bg-gray-100 p-5 py-10">
        <div className="bg-white shadow-xl w-full max-w-4xl p-8 rounded-2xl">

          <ProgressBar step={step} />

          {renderStep()}

        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
