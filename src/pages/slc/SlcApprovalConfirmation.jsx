import { CheckCircle, Download, ArrowRight, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SlcApprovalConfirmation = () => {
    return (
        <div className="container mx-auto max-w-2xl pt-10">
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100">
                <div className="inline-flex p-4 rounded-full bg-green-100 mb-6 animate-bounce-short">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-2">Decision Recorded Successfully!</h1>
                <p className="text-gray-500 mb-8">The application status has been updated. The file is now forwarded to the Finance Department.</p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200 text-left">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Summary</h3>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Approval Status</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">APPROVED</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sanction Order ID</span>
                        <span className="font-mono font-medium text-gray-800">SLC-2024-SAN-098</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md">
                        <Download className="w-5 h-5" />
                        Download Sanction Order
                    </button>

                    <Link to="/slc/dashboard" className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                        Back to Dashboard
                    </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-center gap-1">
                    <FileCheck className="w-4 h-4" />
                    Auto-triggered forward to Finance Queue (Ref: FIN-Q-204)
                </div>
            </div>
        </div>
    );
};

export default SlcApprovalConfirmation;