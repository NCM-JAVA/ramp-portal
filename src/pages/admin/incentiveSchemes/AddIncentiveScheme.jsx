import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Send } from "lucide-react";
import { toast } from "react-toastify";

const AddIncentiveScheme = () => {

    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } = useOutletContext();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setPageTitle("Incentive Schemes");
        setPageSubTitle("Apply for incentive schemes");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // your validations
        // if (!formData.factory_address_line_one) {
        //     toast.error("Please fill required fields!");
        //     return;
        // }

        // After successful submit:
        toast.success("Application submitted successfully!");

        // Optional: clear form
        // setFormData({});
    };

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Incentive Selection</h3>
                <form className="space-y-1" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Name of Incentive applied for</label>
                            <input
                                type="text"
                                name="applied_incentive_name"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                placeholder="Enter name of incentive applied for"
                            />

                            <div className="h-5">
                                {errors.applied_incentive_name && (
                                    <p className="text-red-600 text-[12px] font-bold">
                                        {errors.applied_incentive_name}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Application Type</label>

                            <div className="flex items-center gap-6 mt-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="application_type"
                                        value="Urban"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">New Unit</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="application_type"
                                        value="Rural"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Expansion Unit</span>
                                </label>
                            </div>

                            <div className="h-5">
                                {errors.application_type && (
                                    <p className="text-red-600 text-[12px] font-bold">
                                        {errors.application_type}
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Basic Unit Information</h3>
                        <p className="text-m font-semibold text-red-700"><i>Note: These fields are auto-populated from the Registration-Master Data</i></p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Factory Address Line 1</label>
                                <input
                                    type="text"
                                    name="factory_address_line_one"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter address line one"
                                />
                                <div className="h-5">
                                    {errors.factory_address_line_one && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.factory_address_line_one}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Factory Address Line 2</label>
                                <input
                                    type="text"
                                    name="factory_address_line_two"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter address line two"
                                />
                                <div className="h-5">
                                    {errors.factory_address_line_two && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.factory_address_line_two}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Pincode</label>
                                <input
                                    type="text"
                                    name="unit_pincode"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter pincode"
                                />
                                <div className="h-5">
                                    {errors.unit_pincode && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_pincode}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Town</label>
                                <input
                                    type="text"
                                    name="unit_town"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter town"
                                />
                                <div className="h-5">
                                    {errors.unit_town && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_town}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">District</label>
                                <input
                                    type="text"
                                    name="unit_district"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter district"
                                />
                                <div className="h-5">
                                    {errors.unit_district && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_district}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">State</label>
                                <input
                                    type="text"
                                    name="unit_state"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter state"
                                />
                                <div className="h-5">
                                    {errors.unit_state && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_state}asdasd</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Village / Ward / Road / Street</label>
                                <input
                                    type="text"
                                    name="unit_final_address"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter final address"
                                />
                                <div className="h-5">
                                    {errors.unit_final_address && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_final_address}asdasd</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Contact Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Registered Works No.</label>
                                <input
                                    type="text"
                                    name="unit_registered_works_no"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Registered Works Number"
                                />
                                <div className="h-5">
                                    {errors.unit_registered_works_no && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_registered_works_no}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Email Id</label>
                                <input
                                    type="email"
                                    name="unit_email"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter email id"
                                />
                                <div className="h-5">
                                    {errors.unit_email && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_email}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Constitution & Legal Status</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Constitution of the unit</label>
                                <input
                                    type="text"
                                    name="unit_constitution"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Sole Proprietor, Partnership, Pvt. Ltd. etc."
                                />
                                <div className="h-5">
                                    {errors.unit_constitution && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_constitution}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Udyog / EM Registration No.</label>
                                <input
                                    type="text"
                                    name="unit_udyog_registration_no"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Udyog / EM registration number"
                                />
                                <div className="h-5">
                                    {errors.unit_udyog_registration_no && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_udyog_registration_no}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">GST Regitration No.</label>
                                <input
                                    type="text"
                                    name="unit_gst_registration_no"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter GST Registration Number"
                                />
                                <div className="h-5">
                                    {errors.unit_gst_registration_no && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_gst_registration_no}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Factory License No.</label>
                                <input
                                    type="text"
                                    name="unit_factory_license_no"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Factory License Number"
                                />
                                <div className="h-5">
                                    {errors.unit_factory_license_no && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_factory_license_no}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">PAN (Association / Board / Company)</label>
                                <input
                                    type="text"
                                    name="pan_association"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter PAN (Association / Board / Company)"
                                />
                                <div className="h-5">
                                    {errors.pan_association && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.pan_association}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">PAN (Individual / Limited Liability)</label>
                                <input
                                    type="text"
                                    name="pan_individual"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter PAN (Individual / Limited Liability)"
                                />
                                <div className="h-5">
                                    {errors.pan_individual && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.pan_individual}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Proprietor / Partner / Director Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Name"
                                />
                                <div className="h-5">
                                    {errors.name && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Udyog / EM registration number"
                                />
                                <div className="h-5">
                                    {errors.address && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.address}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Unit Head</label>
                                <input
                                    type="text"
                                    name="unit_head"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter unit head name"
                                />
                                <div className="h-5">
                                    {errors.unit_head && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.unit_head}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Mobile Number"
                                />
                                <div className="h-5">
                                    {errors.mobile && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.mobile}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Email"
                                />
                                <div className="h-5">
                                    {errors.email && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Aadhar Number (Director / Partner)</label>
                                <input
                                    type="text"
                                    name="aadhar_no"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Aadhar Number"
                                />
                                <div className="h-5">
                                    {errors.aadhar_no && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.aadhar_no}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Operational Plan</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Proposed Date of Commencement</label>
                                <input
                                    type="date"
                                    name="commencement_date"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                                <div className="h-5">
                                    {errors.commencement_date && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.commencement_date}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Type of Industry</label>
                                <input
                                    type="text"
                                    name="industry_type"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter type of industry"
                                />
                                <div className="h-5">
                                    {errors.industry_type && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.industry_type}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Date of Actual Commencement</label>
                                <input
                                    type="date"
                                    name="actual_commencement_date"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                                <div className="h-5">
                                    {errors.actual_commencement_date && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.actual_commencement_date}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Main Product</label>
                                <select name="main_product" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">Select Product</option>
                                    <option value="product_1">Product 1</option>
                                    <option value="product_2">Product 2</option>
                                    <option value="product_3">Product 3</option>
                                </select>

                                <div className="h-5">
                                    {errors.main_product && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.main_product}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Installed Production Capacity</label>
                                <input
                                    type="text"
                                    name="installed_production_capacity"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter Installed Production Capacity"
                                />
                                <div className="h-5">
                                    {errors.installed_production_capacity && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.installed_production_capacity}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Fixed Capital Investment (Prposed)</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Land (In Rupees)</label>
                                <input
                                    type="text"
                                    name="land_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter land cost in reupees"
                                />
                                <div className="h-5">
                                    {errors.land_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.land_cost}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Site Development (In Rupees)</label>
                                <input
                                    type="text"
                                    name="site_development_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter site development cost"
                                />
                                <div className="h-5">
                                    {errors.site_development_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.site_development_cost}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Factory Building (In Rupees)</label>
                                <input
                                    type="text"
                                    name="factory_building_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter factory building cost"
                                />
                                <div className="h-5">
                                    {errors.factory_building_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.factory_building_cost}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Office Building (In Rupees)</label>
                                <input
                                    type="text"
                                    name="office_building_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter office building cost"
                                />

                                <div className="h-5">
                                    {errors.office_building_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.office_building_cost}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Plant & Machinary (In Rupees)</label>
                                <input
                                    type="text"
                                    name="plant_machinary_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter plant and machinary cost"
                                />
                                <div className="h-5">
                                    {errors.plant_machinary_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.plant_machinary_cost}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Electrical Cost (In Rupees)</label>
                                <input
                                    type="text"
                                    name="electrical_cost"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter electrical cost"
                                />
                                <div className="h-5">
                                    {errors.electrical_cost && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.electrical_cost}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Total Fixed Investment (In Rupees)</label>
                                <input
                                    type="text"
                                    name="total_fixed_investment"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Auto calculated"
                                    readOnly
                                />
                                <div className="h-5">
                                    {errors.total_fixed_investment && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.total_fixed_investment}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Cost Position (As On Specified Standard)</label>
                                <input
                                    type="text"
                                    name="cost_position"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter cost position"
                                />
                                <div className="h-5">
                                    {errors.cost_position && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.cost_position}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Employment Generation</h3>

                        <div class="overflow-x-auto">
                            <table class="min-w-full border border-gray-300 mt-3 mb-5">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border px-4 py-2 text-left font-semibold">Category</th>
                                        <th class="border px-4 py-2 text-left font-semibold">Managerial</th>
                                        <th class="border px-4 py-2 text-left font-semibold">Supervisory</th>
                                        <th class="border px-4 py-2 text-left font-semibold">Skilled</th>
                                        <th class="border px-4 py-2 text-left font-semibold">Semi-skilled</th>
                                        <th class="border px-4 py-2 text-left font-semibold">Unskilled</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th class="border px-4 py-2 text-left font-semibold">ASPT / (Non ASPT)</th>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="aspt_managerial" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="aspt_supervisory" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="aspt_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="aspt_semi_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="aspt_non_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                    </tr>

                                    <tr class="bg-gray-50">
                                        <td class="border px-4 py-2 text-left font-semibold">Non-APST / (Non APST)</td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="non_aspt_managerial" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="non_aspt_supervisory" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="non_aspt_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="non_aspt_semi_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input type="text" name="non_aspt_non_skilled" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">Declaration</h3>

                        <div className="grid grid-cols-1 ">
                            <div className="flex items-start space-x-2 mt-1">
                                <input
                                    type="checkbox"
                                    name="declaration"
                                    value="1"
                                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />

                                <label className="text-sm text-gray-700">
                                    I hereby declare that the information provided is accurate
                                </label>
                            </div>

                            <div className="h-5">
                                {errors.land_cost && (
                                    <p className="text-red-600 text-[12px] font-bold">
                                        {errors.land_cost}
                                    </p>
                                )}
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Upload Signature</label>
                                <input
                                    type="file"
                                    name="signature"
                                    className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                                <div className="h-5">
                                    {errors.signature && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.signature}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    placeholder="Enter designation"
                                />

                                <div className="h-5">
                                    {errors.designation && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.designation}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    name="declaration_date"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                                <div className="h-5">
                                    {errors.declaration_date && (
                                        <p className="text-red-600 text-[12px] font-bold">{errors.declaration_date}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="
                                    flex items-center justify-center gap-2 
                                    bg-gradient-to-r from-blue-500 to-indigo-600 
                                    hover:from-blue-600 hover:to-indigo-700 
                                    text-white font-semibold py-2 px-4 
                                    rounded-lg shadow 
                                    transition-all duration-300 ease-in-out
                                "
                            >
                                <Send className="h-4 w-4" />
                                Submit Application
                            </button>

                        </div>

                    </div>

                </form>

            </div>
        </>
    )
}

export default AddIncentiveScheme;