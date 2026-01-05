
const ArrowProgressBar = ({ step }) => {
    const steps = [
        "Unit Details",
        "Unit Constitution",
        "Operational Plan",
        "Legal Details",
        "Financials",
        "Employment",
        "Declaration"
    ];

    const currentStep = Math.max(1, Number(step) || 1);

    return (
        <div className="w-full flex overflow-x-auto no-scrollbar mt-4 mb-4">
            <div className="flex w-max">
                {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <div
                            key={index}
                            className={`
                                relative px-3 py-2 text-[15px] font-medium flex items-center
                                whitespace-nowrap transition-all duration-300 shadow-sm
                                ${isCompleted
                                    ? "bg-orange-600 text-white"
                                    : isCurrent
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white ring-2 ring-orange-400 z-10"
                                        : "bg-orange-100 text-orange-700"
                                }
                                ${!isLast ? "mr-1" : ""}
                            `}
                            style={{
                                clipPath: isLast
                                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                                    : "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)",
                                borderRadius: "4px",
                            }}
                        >
                            <span>{label}</span>

                            {!isLast && (
                                <div
                                    className={`
                                        absolute right-0 top-0 h-full w-3
                                        ${isCompleted || isCurrent
                                            ? "bg-orange-700"
                                            : "bg-orange-300"
                                        }
                                    `}
                                    style={{
                                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ArrowProgressBar;

