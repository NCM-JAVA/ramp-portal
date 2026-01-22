import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const MyProfile = () => {
    const { setPageTitle, setPageSubTitle, setActionButton, setBackButton } =
        useOutletContext();

    const [form, setForm] = useState({
        name: "Anshu Singh",
        email: "anshu.singh@example.com",
        phone: "9876543210",
        role: "User",
        address: "Patna, Bihar",
    });

    useEffect(() => {
        setPageTitle("My Profile");
        setPageSubTitle("View and update your profile details");
        setBackButton(null);
        setActionButton(null);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // API call goes here
        toast.success("Profile updated successfully!");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">

            {/* ================= PROFILE HEADER ================= */}
            <div className="flex items-center gap-4 border-b pb-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <User className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {form.name}
                    </h3>
                    <p className="text-sm text-gray-500">{form.role}</p>
                </div>
            </div>

            {/* ================= PROFILE FORM ================= */}
            <div className="space-y-8">

                {/* Basic Information */}
                <Section title="Basic Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Full Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <Input
                            label="Email Address"
                            name="email"
                            value={form.email}
                            disabled
                            icon={<Mail className="w-4 h-4" />}
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            icon={<Phone className="w-4 h-4" />}
                        />

                        <Input
                            label="Role"
                            name="role"
                            value={form.role}
                            disabled
                        />
                    </div>
                </Section>

                {/* Address */}
                <Section title="Address">
                    <textarea
                        rows="5"
                        placeholder="Full Address"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                </Section>

                {/* Actions */}
                <div className="flex justify-end gap-4 pt-4">
                    <button
                        className="px-4 py-2 text-sm
                                sm:px-5 sm:py-2 sm:text-base
                                border border-orange-400 rounded-md 
                                text-gray-700 bg-white 
                                flex items-center justify-center gap-2 
                                w-full sm:w-auto
                                hover:bg-orange-100"
                        onClick={() => window.location.reload()}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 shadow"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, children }) {
    return (
        <div>
            <h3 className="text-lg font-semibold border-b-2 border-orange-500 pb-1">
                {title}
            </h3>
            <div className="mt-6">{children}</div>
        </div>
    );
}

function Input({ label, name, value, onChange, disabled, icon }) {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative mt-1">
                {icon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                )}
                <input
                    name={name}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    className={`w-full p-2 border rounded text-sm sm:text-base transition focus:outline-none
            ${icon ? "pl-10" : ""}
            ${disabled
                            ? "bg-gray-100 border-gray-300 cursor-not-allowed text-gray-700"
                            : "bg-white focus:ring-2 focus:ring-orange-500"}`}
                />
            </div>
        </div>
    );
}
