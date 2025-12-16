import { X } from "lucide-react";
import { useState } from "react";

const FormIVModal = ({ onClose }) => {
    const [form, setForm] = useState({
        assetName: "",
        supplier: "",
        invoiceNo: "",
        invoiceDate: "",
        invoiceValue: "",
        gstAmount: "",
        assetType: "",
        installationDate: "",
        status: "",
    });

    const [assets, setAssets] = useState([
        {
            assetName: "CNC Machine",
            supplier: "ABC Industries",
            invoiceNo: "INV-2024-001",
            invoiceDate: "2024-01-15",
            invoiceValue: "2500000",
            gstAmount: "450000",
            assetType: "Machinery",
            installationDate: "2024-01-20",
            status: "Installed",
        },
        {
            assetName: "Hydraulic Press",
            supplier: "XYZ Equipment",
            invoiceNo: "INV-2024-002",
            invoiceDate: "2024-01-20",
            invoiceValue: "1800000",
            gstAmount: "324000",
            assetType: "Machinery",
            installationDate: "2024-01-25",
            status: "Installed",
        },
    ]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (!form.assetName || !form.invoiceValue) return;

        setAssets([...assets, form]);
        setForm({
            assetName: "",
            supplier: "",
            invoiceNo: "",
            invoiceDate: "",
            invoiceValue: "",
            gstAmount: "",
            assetType: "",
            installationDate: "",
            status: "",
        });
    };

    const totalInvestment = assets.reduce(
        (sum, a) => sum + Number(a.invoiceValue || 0) + Number(a.gstAmount || 0),
        0
    );

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">

                <div className="flex justify-between items-center bg-green-600 text-white px-4 py-3">
                    <h2 className="text-sm sm:text-base font-semibold">
                        Plant & Machinery Details (Form IV)
                    </h2>
                    <button onClick={onClose}>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-4 space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input label="Name of Asset/Machinery" name="assetName" placeholder="Enter asset name" value={form.assetName} onChange={handleChange} />
                        <Input label="Supplier Name" name="supplier" placeholder="Enter supplier name" value={form.supplier} onChange={handleChange} />
                        <Input label="Invoice/Bill No." name="invoiceNo" placeholder="Enter invoice number" value={form.invoiceNo} onChange={handleChange} />

                        <Input label="Invoice Date" name="invoiceDate" type="date" value={form.invoiceDate} onChange={handleChange} />
                        <Input label="Invoice Value (₹)" name="invoiceValue" placeholder="Enter amount" value={form.invoiceValue} onChange={handleChange} />
                        <Input label="GST Amount (₹)" name="gstAmount" placeholder="Enter GST amount" value={form.gstAmount} onChange={handleChange} />

                        <Input label="Asset Type" name="assetType" value={form.assetType} onChange={handleChange} />
                        <Input label="Installation Date" name="installationDate" type="date" value={form.installationDate} onChange={handleChange} />
                        <Input label="Status" name="status" value={form.status} onChange={handleChange} />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleAdd}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                        >
                            Add to List
                        </button>
                    </div>

                    <h3 className="font-semibold text-sm border-t pt-3">
                        Asset List
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-2 py-2">Sr.</th>
                                    <th className="border px-2 py-2">Asset Name</th>
                                    <th className="border px-2 py-2">Supplier</th>
                                    <th className="border px-2 py-2">Invoice No.</th>
                                    <th className="border px-2 py-2">Invoice Date</th>
                                    <th className="border px-2 py-2">Invoice Value (₹)</th>
                                    <th className="border px-2 py-2">GST (₹)</th>
                                    <th className="border px-2 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assets.map((a, i) => (
                                    <tr key={i}>
                                        <td className="border px-2 py-1 text-center">{i + 1}</td>
                                        <td className="border px-2 py-1">{a.assetName}</td>
                                        <td className="border px-2 py-1">{a.supplier}</td>
                                        <td className="border px-2 py-1">{a.invoiceNo}</td>
                                        <td className="border px-2 py-1">{a.invoiceDate}</td>
                                        <td className="border px-2 py-1 text-right">{a.invoiceValue}</td>
                                        <td className="border px-2 py-1 text-right">{a.gstAmount}</td>
                                        <td className="border px-2 py-1 text-center space-x-2">
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                                                Edit
                                            </button>
                                            <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end">
                        <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-2 rounded text-sm font-semibold">
                            Total Investment in Plant & Machinery: ₹ {totalInvestment.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 px-4 py-3 border-t">
                    <button
                        onClick={onClose}
                        className="inline-flex items-center gap-2
                        bg-red-600 hover:bg-red-700
                        text-white text-sm font-medium
                        px-4 py-1.5 rounded-md
                        shadow"
                    >
                        Cancel
                    </button>
                    <button className="inline-flex items-center gap-2
                                bg-green-600 hover:bg-green-700
                                text-white text-sm font-medium
                                px-4 py-1.5 rounded-md
                                shadow">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

const Input = ({ label, ...props }) => (
    <div>
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
            {...props}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
    </div>
);

export default FormIVModal;
