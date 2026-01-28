import { Download } from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';

const SlcReports = () => {

    // Data for Scheme Distribution (Pie Chart)
    const schemeData = [
        { name: 'PMEGP', value: 45, color: '#4F46E5' }, // Indigo-600
        { name: 'MMS', value: 30, color: '#3B82F6' },   // Blue-500
        { name: 'PMFME', value: 25, color: '#A855F7' }, // Purple-500
    ];

    // Data for Approval Trends (Bar Chart)
    const trendData = [
        { month: 'Aug', Approved: 18, Rejected: 2 },
        { month: 'Sep', Approved: 22, Rejected: 3 },
        { month: 'Oct', Approved: 25, Rejected: 4 },
        { month: 'Nov', Approved: 20, Rejected: 1 },
        { month: 'Dec', Approved: 28, Rejected: 2 },
        { month: 'Jan', Approved: 30, Rejected: 5 },
    ];

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">SLC Reports & Analytics</h1>
                <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors">
                    <Download className="w-4 h-4" />
                    Export Data
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Scheme Wise Distribution Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Scheme Distribution</h2>
                            <p className="text-sm text-gray-500">Applications by Scheme Type</p>
                        </div>
                    </div>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={schemeData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {schemeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                        {schemeData.map((item, index) => (
                            <div key={index} className="p-2 rounded font-semibold" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                                {item.name}: {item.value}%
                            </div>
                        ))}
                    </div>
                </div>

                {/* Monthly Approval Trends Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Approval Trends</h2>
                            <p className="text-sm text-gray-500">Approvals vs Rejections (Last 6 Months)</p>
                        </div>
                    </div>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={trendData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="Approved" fill="#10B981" radius={[4, 4, 0, 0]} barSize={20} />
                                <Bar dataKey="Rejected" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 flex justify-around text-center text-xs">
                        <div>
                            <span className="block text-gray-400 mb-1">Total Approved</span>
                            <span className="text-lg font-bold text-gray-800">143</span>
                        </div>
                        <div>
                            <span className="block text-gray-400 mb-1">Total Rejected</span>
                            <span className="text-lg font-bold text-gray-800">17</span>
                        </div>
                        <div>
                            <span className="block text-gray-400 mb-1">Pending</span>
                            <span className="text-lg font-bold text-gray-800">32</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Report Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">Monthly Summary Report</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                            <tr>
                                <th className="p-4 font-semibold">Month</th>
                                <th className="p-4 font-semibold">Total Applications</th>
                                <th className="p-4 font-semibold">Approved</th>
                                <th className="p-4 font-semibold">Rejected</th>
                                <th className="p-4 font-semibold text-right">Total Sanctioned Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {[
                                { month: "January 2024", total: 45, approved: 30, rejected: 5, amount: "₹ 85,00,000" },
                                { month: "December 2023", total: 38, approved: 28, rejected: 2, amount: "₹ 62,50,000" },
                                { month: "November 2023", total: 42, approved: 35, rejected: 4, amount: "₹ 91,20,000" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-800">{row.month}</td>
                                    <td className="p-4 text-gray-600">{row.total}</td>
                                    <td className="p-4 text-green-600">{row.approved}</td>
                                    <td className="p-4 text-red-600">{row.rejected}</td>
                                    <td className="p-4 text-gray-800 font-medium text-right">{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SlcReports;
