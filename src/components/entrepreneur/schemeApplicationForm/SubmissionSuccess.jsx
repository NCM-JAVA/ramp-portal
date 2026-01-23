import { CheckCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SubmissionSuccess = ({ formData, handleChange, nextStep, prevStep, errors, id, uploadedDocs = {}}) => {
  return (
    <>
      {/* ================= CONTENT ================= */}
      <div className="space-y-2 p-2 sm:p-2">
        {/* <h3 className="text-lg font-semibold border-b-2 border-gray-800 pb-1">
          Submission Confirmation
        </h3> */}

        <div className="bg-white p-6 rounded-xl flex flex-col items-center text-center gap-4">

          {/* SUCCESS ICON */}
          <CheckCircleIcon size={70} className="text-green-600" />

          {/* MESSAGE */}
          <h2 className="text-xl sm:text-2xl font-bold text-green-700">
            Application Submitted Successfully
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Your application has been submitted and is currently under review.
          </p>

          {/* DETAILS */}
          <div className="w-full max-w-xl border rounded-lg p-4 text-left space-y-3 mt-4">
            <Detail label="Application ID" value={id} />
            <Detail label="Scheme Name" value={formData.unit_name} />

            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Status</span>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
                SUBMITTED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ACTION BUTTON ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">

        {/* EMPTY LEFT SIDE (ALIGNMENT SAME AS OTHER STEPS) */}
        <div />

        {/* RIGHT ACTION */}
        <Link to="/entrepreneur/my-application">
        <div className="flex justify-end items-center">
          <button
            // onClick={goToMyApplications}
            className="
              bg-orange-600 hover:bg-orange-700 
              text-white
              px-5 py-2 text-sm
              sm:px-6 sm:py-2 sm:text-base
              rounded-md 
              flex items-center justify-center gap-2
              w-full sm:w-auto
              transition-all
            "
          >
            Go to My Applications
          </button>
        </div>
        </Link>
      </div>
    </>
  );
};

export default SubmissionSuccess;

/* ================= DETAIL ROW ================= */
const Detail = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="font-medium text-gray-800">{value || "-"}</span>
  </div>
);
