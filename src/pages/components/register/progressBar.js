import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ProgressBar = () => {
  const { step } = useContext(FormContext);
  const steps = ["Unit Details", "Unit Constitution", "Operational Plan", "Legal Details", "Financials", "Employment", "Declaration"];

  const progressWidth = (step / steps.length) * 100;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-200 h-2 rounded-full">
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
  );
};

export default ProgressBar;
