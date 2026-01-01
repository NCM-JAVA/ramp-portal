import * as Yup from 'yup';

// Login validation schema
export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

// Unit Details validation schema
export const unitDetailsValidationSchema = Yup.object({
    industrial_unit: Yup.string()
        .min(2, 'Industrial unit must be at least 2 characters')
        .required('Industrial unit is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone must be exactly 10 digits')
        .optional(),
    factory_address: Yup.string()
        .required('Factory address is required'),
    po: Yup.string()
        .required('Post Office is required'),
    district: Yup.string()
        .required('District is required'),
    state: Yup.string()
        .required('State is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    agree: Yup.boolean()
        .oneOf([true], 'You must agree to continue')
        .required('You must agree to continue'),
});

// Unit Constitution validation schema
export const unitConstitutionValidationSchema = Yup.object({
    constitution_type: Yup.string()
        .required('Select Constitution type'),
    partners: Yup.string()
        .min(2, 'Partners name must be minimum 2 characters')
        .required('Name of partners is required'),
    address: Yup.string()
        .required('Address is required'),
    aadhar_document: Yup.mixed()
        .required('Aadhar document is required')
        .test('fileType', 'Aadhar must be JPG, PNG, or PDF', (value) => {
            if (!value) return false;
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            return allowedTypes.includes(value.type);
        })
        .test('fileSize', 'Aadhar file must be less than 2MB', (value) => {
            if (!value) return false;
            return value.size <= 2 * 1024 * 1024;
        }),
    pan_document: Yup.mixed()
        .required('PAN document is required')
        .test('fileType', 'PAN must be JPG, PNG, or PDF', (value) => {
            if (!value) return false;
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            return allowedTypes.includes(value.type);
        })
        .test('fileSize', 'PAN file must be less than 2MB', (value) => {
            if (!value) return false;
            return value.size <= 2 * 1024 * 1024;
        }),
});

// Operational Plan validation schema
export const operationalPlanValidationSchema = Yup.object({
    date_of_commencement: Yup.string()
        .required('Date of commencement is required'),
    industry_type: Yup.string()
        .required('Industry type is required'),
    new_unit: Yup.boolean()
        .required('New unit is required'),
    activity_type: Yup.string()
        .required('Activity type is required'),
    product_name: Yup.string()
        .required('Product name is required'),
    power_requirement: Yup.string()
        .required('Power requirement is required'),
    power_requirement_unit: Yup.string()
        .required('Power requirement unit is required'),
    annual_production_capacity: Yup.string()
        .required('Annual production capacity is required'),
    annual_production_quantity: Yup.string()
        .required('Annual production quantity is required'),
    annual_production_value: Yup.string()
        .required('Annual production value is required'),
    major_raw_material: Yup.string()
        .required('Major raw material is required'),
});

// Legal Details validation schema
export const legalDetailsValidationSchema = Yup.object({
    udyam_registration_no: Yup.string()
        .required('Udyam registration field is required'),
    gst_no: Yup.string()
        .required('GST Number field is required'),
    trading_license_no: Yup.string()
        .required('Trading License Number field is required'),
    factory_license_no: Yup.string()
        .required('Factory License Number field is required'),
    consent_operate: Yup.string()
        .required('Consent Operate field is required'),
    gst_document: Yup.mixed()
        .required('GST document is required')
        .test('fileType', 'GST document must be JPG, PNG, or PDF', (value) => {
            if (!value) return false;
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            return allowedTypes.includes(value.type);
        })
        .test('fileSize', 'GST file must be less than 2MB', (value) => {
            if (!value) return false;
            return value.size <= 2 * 1024 * 1024;
        }),
    factory_license_document: Yup.mixed()
        .required('Factory license document is required')
        .test('fileType', 'Factory license must be JPG, PNG, or PDF', (value) => {
            if (!value) return false;
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            return allowedTypes.includes(value.type);
        })
        .test('fileSize', 'Factory license file must be less than 2MB', (value) => {
            if (!value) return false;
            return value.size <= 2 * 1024 * 1024;
        }),
});

// Financials validation schema
export const financialsValidationSchema = Yup.object({
    land: Yup.string()
        .required('Land field is required'),
    site_development: Yup.string()
        .required('Site Development field is required'),
    factory_building: Yup.string()
        .required('Factory Building field is required'),
    office_building: Yup.string()
        .required('Office Building field is required'),
    plant_machinary: Yup.string()
        .required('Plant Machinary field is required'),
    electrical_installation: Yup.string()
        .required('Electrical Installation field is required'),
    preliminary_expenses: Yup.string()
        .required('Preliminary expenses field is required'),
    miscellaneous_fixed_assets: Yup.string()
        .required('Miscellaneous fixed assets field is required'),
});

// Declaration validation schema
export const declarationValidationSchema = Yup.object({
    new_unit: Yup.boolean()
        .oneOf([true], 'You must agree to the declaration')
        .required('You must agree to the declaration'),
    full_name: Yup.string()
        .required('Full name is required'),
    signature: Yup.string()
        .required('Signature is required'),
});
