import React, { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formDataUnitDetails, setFormDataUnitDetails] = useState({
    industrial_unit: "",
    email: "",
    phone: "",
    factory_address: "",
    po: "",
    district: "",
    state: ""
  });

  const [formData, setFormData] = useState({
    n: "",
    email: "",
    phone: "",
    factory_address: "",
    po: "",
    district: "",
    state: ""
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleUnitDetailsChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormDataUnitDetails({
      ...formDataUnitDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const totalSteps = 7;

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log(formDataUnitDetails);
  };

  const steps = ["Unit Details", "Unit Constitution", "Operational Plan", "Legal Details", "Financials", "Employment", "Declaration"];
  const progressWidth = (step / steps.length) * 100;


  const Step1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Unit Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name of Industrial Unit & Location <span>*</span></label>
          <input
            type="text"
            name="industrial_unit"
            value={formDataUnitDetails.industrial_unit}
            placeholder="Enter Name of Industrial Unit & Location"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />

        </div>


        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Registered Mobile/Telephone</label>
          <input
            type="text"
            name="phone"
            value={formDataUnitDetails.phone}
            placeholder="Registered Mobile Number"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Factory Address <span>*</span>
          </label>
          <input
            type="text"
            name="factory_address"
            value={formDataUnitDetails.factory_address}
            placeholder="Address Line"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="text"
            name="po"
            value={formDataUnitDetails.po}
            placeholder="PO"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="text"
            name="district"
            value={formDataUnitDetails.district}
            placeholder="District"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="text"
            name="state"
            value={formDataUnitDetails.state}
            placeholder="State"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email <span>*</span></label>
          <input
            type="text"
            name="email"
            value={formDataUnitDetails.email}
            placeholder="Enter email"
            className="border p-2 rounded w-full"
            onChange={handleUnitDetailsChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="agree"
            className="w-4 h-4"
            onChange={handleUnitDetailsChange}
          />
          <label className="text-gray-700 font-medium">I agree to the terms</label>
        </div>
      </div>



      <div className="flex justify-end items-center gap-4 mt-4">
        <button
          onClick={prev}
          className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 bg-white flex items-center gap-2"
        >
          Save as Draft
        </button>

        <button
          onClick={next}
          className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-2"
        >
          Next
          <ArrowRightCircleIcon size={20} />
        </button>
      </div>

    </div>

  );

  const Step2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Unit Constitution</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Constitution Type <span>*</span></label>
          <select
            name="constitution_type"
            value={formData.constitution_type}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Constitution Type</option>
            <option value="constitution 1">constitution 1</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Proprietor/Partners/Directors <span>*</span></label>
            <input
              type="text"
              name="partners"
              placeholder="Name"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <input
            type="text"
            name="address"
            value="po"
            placeholder="Address"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="flex flex-col">
          <button onClick={prev} className="px-4 py-2 border rounded">
            <span className="text-xl font-bold"> + </span>
            <span>Add Member</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={prev}
            className="px-4 py-2 border rounded flex items-center gap-2"
          >
            <ArrowLeftCircleIcon size={20} />
            Back
          </button>
        </div>

        <div className="flex justify-end items-center gap-4 mt-4">
          <button
            onClick={prev}
            className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 bg-white flex items-center gap-2"
          >
            Save as Draft
          </button>

          <button
            onClick={next}
            className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-2"
          >
            Next
            <ArrowRightCircleIcon size={20} />
          </button>
        </div>
      </div>

    </div>
  );

  const Step3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Operational Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Prposed Date of Commencement <span>*</span></label>
          <input
            type="date"
            name="date_of_commencement"
            value={formData.industrial_unit}
            placeholder="Enter Name of Industrial Unit & Location"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Type of Industry</label>
          <input
            type="text"
            name="industry_type"
            value={formData.phone}
            placeholder="Type of Industry"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Type of Activity</label>
          <input
            name="activity_type"
            value={formData.phone}
            placeholder="Type of Activity"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name of Product/Service <span>*</span></label>
          <input
            name="product_name"
            value={formData.industrial_unit}
            placeholder="Enter Name of Product/Service"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Power Requirement <span>*</span>
          </label>
          <input
            name="power_requirement"
            placeholder="Power Requirement"
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="flex flex-col justify-end">
          <input
            name="power_requirement_unit"
            placeholder="KW"
            className="border p-2 rounded w-full"
          />
        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email <span>*</span></label>
          <input
            name="email"
            placeholder="Enter email"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="agree"
            className="w-4 h-4"
          />
          <label className="text-gray-700 font-medium">I agree to the terms</label>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="flex flex-col">
          <button onClick={prev} className="px-4 py-2 border rounded">
            <span className="text-xl font-bold"> + </span>
            <span>Add Material</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={prev}
            className="px-4 py-2 border rounded flex items-center gap-2"
          >
            <ArrowLeftCircleIcon size={20} />
            Back
          </button>
        </div>

        <div className="flex justify-end items-center gap-4 mt-4">
          <button
            onClick={prev}
            className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 bg-white flex items-center gap-2"
          >
            Save as Draft
          </button>

          <button
            onClick={next}
            className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-2"
          >
            Next
            <ArrowRightCircleIcon size={20} />
          </button>
        </div>
      </div>

    </div>
  );

  const Step4 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Step 4: City Info</h2>
      <input name="city" placeholder="City" className="border p-2 w-full" onChange={handleChange} />
      <button onClick={prev} className="px-4 py-2 border rounded">Back</button>
      <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Next</button>
    </div>
  );

  const Step5 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Step 5: State</h2>
      <input name="state" placeholder="State" className="border p-2 w-full" onChange={handleChange} />
      <button onClick={prev} className="px-4 py-2 border rounded">Back</button>
      <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Next</button>
    </div>
  );

  const Step6 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Step 6: Security</h2>
      <input name="password" placeholder="Password" type="password" className="border p-2 w-full" onChange={handleChange} />
      <input name="confirmPassword" placeholder="Confirm Password" type="password" className="border p-2 w-full" onChange={handleChange} />
      <button onClick={prev} className="px-4 py-2 border rounded">Back</button>
      <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Next</button>
    </div>
  );

  const Step7 = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Step 7: Review Details</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={prev} className="px-4 py-2 border rounded">Back</button>
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded ml-2">Submit</button>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">

        {/* <StepProgressBar step={step} totalSteps={totalSteps} /> */}

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <div key={i} className={`text-sm font-medium ${i + 1 <= step ? "text-blue-600" : "text-gray-400"}`}>
                {s}
              </div>
            ))}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          <div className="flex justify-between mt-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold border
                ${i + 1 <= step ? "bg-blue-600 text-white border-blue-600" : "bg-gray-300 border-gray-500"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Step6 />}
        {step === 7 && <Step7 />}
      </div>
    </div>
  );
};

export default Register;
