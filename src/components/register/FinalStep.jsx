import React from "react";
import { CheckCircle } from "lucide-react";

const FinalStep = () => {
    return (
        <div className="text-center py-10">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />

            <h2 className="text-2xl font-bold mb-2">Registration Completed!</h2>

            <p className="text-gray-600 mb-6">
                Thank you for registering. Your information has been successfully submitted.
            </p>

            <a
                href="/login"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Go to Login
            </a>
        </div>
    );
}

export default FinalStep;
