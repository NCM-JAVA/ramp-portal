import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SchemeApplicationForm from "./SchemeApplicationForm";

const AvailableSchemes = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();
    const [selectedForm, setSelectedForm] = useState("");

    useEffect(() => {
        setPageTitle("Available Incentives / Subsidy");
        setPageSubTitle("Explore the Incentives / Subsidy you can apply for");
        setBackButton(null);
        setActionButton(null);
        setActionButton(null);
    }, [setPageTitle, setPageSubTitle, setBackButton, setActionButton]);

    return (
        <div className="bg-white p-6 rounded-xl shadow space-y-12">
            {/* <h3 className="text-lg font-semibold text-orange-700 mb-5 border-l-4 border-orange-600 pl-3">

            </h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                <button
                    type="button"
                    onClick={() => setSelectedForm("new_unit")}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all
                            ${selectedForm === "new_unit"
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:bg-orange-700 active:scale-95"
                            : "bg-orange-100 text-orange-700 hover:bg-orange-600 hover:text-white "
                        }`}
                >
                    New Unit
                </button>

                <button
                    type="button"
                    onClick={() => setSelectedForm("units_undergoing")}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${selectedForm === "units_undergoing"
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:bg-orange-700 active:scale-95"
                            : "bg-orange-100 text-orange-700 hover:bg-orange-600 hover:text-white"
                        }`}
                >
                    Units Undergoing
                </button>

            </div>


            <div className="mt-6">
                {selectedForm === "new_unit" && (
                    <SchemeApplicationForm />                        
                )}

                {selectedForm === "units_undergoing" && (
                    <></>
                )}
            </div>



        </div>
    )
}

export default AvailableSchemes;
