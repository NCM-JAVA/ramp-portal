import React from "react";

const RuleConfiguration = () => {

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            <section className="mb-8">
                <h3 className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 border-b-2 border-orange-500 pb-1">
                    Incentive Rule Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input label="Incentive %" value="" />
                    <Input label="Max Cap (Rs.)" value="" />
                    <RadioGroup
                        label="Incentive Type"
                        name="incentiveType"
                        options={[
                        { label: "Land", value: "land" },
                        { label: "Building", value: "building" },
                        { label: "P&C", value: "p&c" },
                        ]}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Input label="APST Bonus %" value="" />
                    <Input label="Women Enterpreneur Bonus %" value="" />
                    <Input label="Delay Penalty" value="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Select
                        label="Capital vs Revenue Split"
                        options={["Allowed", "Not Allowed"]}
                    />
                </div>
            </section>

            <div className="flex flex-wrap gap-3">
                <PrimaryButton text="Save Rules" />
                <SecondaryButton text="Test Formula" />
                <SecondaryButton text="Reset to Default" />
            </div>
        </div>
    );
}

export default RuleConfiguration;

const Input = ({
    label,
    value,
    placeholder = "",
    type = "text",
    className = "",
    readOnly = false,
    icon = false,
}) => (
    <div className={`flex flex-col ${className}`}>
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`
          h-10 w-full px-3 border rounded text-sm
          ${readOnly ? "bg-orange-50 cursor-not-allowed" : "bg-white"}
          focus:outline-none focus:ring-2 focus:ring-orange-500
        `}
        />
        {icon && (
            <span className="absolute right-3 top-2.5 text-gray-400">📷</span>
        )}
    </div>
);

const Select = ({ label, options }) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">{label}</label>
        <select className="h-10 w-full border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ">
            {options.map((opt) => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const PrimaryButton = ({ text }) => (
    <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm shadow">
        {text}
    </button>
);

const SecondaryButton = ({ text }) => (
    <button className="px-6 py-2 bg-orange-200 hover:bg-orange-300 text-orange-700 rounded-lg text-sm">
        {text}
    </button>
);

const RadioGroup = ({
  label,
  name,
  options = [],
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="flex items-center gap-4 mt-1">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 text-sm cursor-pointer
              ${disabled ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            <input
              type="radio"
              name={name}
            //   value={option.value}
            //   checked={value === option.value}
            //   onChange={() => onChange(option.value)}
              disabled={disabled}
              className="
                text-orange-600
                focus:ring-orange-500
                border-orange-300
              "
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

