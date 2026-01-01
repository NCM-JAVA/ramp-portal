// Helper component for displaying form errors with touched check
export const FormError = ({ name, errors, touched }) => {
    // Only show error if field has been touched
    if (!errors[name] || !touched[name]) return null;

    return (
        <p className="text-red-600 text-[12px] font-bold">
            {errors[name]}
        </p>
    );
};

export default FormError;
