import moment from 'moment';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const BASENAME = process.env.REACT_APP_ROUTER_BASE;

export const NumberRegex = /^[0-9]*$/;

export const IntegerOrDecimalRegex = /^[0-9]*\.?[0-9]*$/;

export const AlphabetRegex = /^(?![\s-])([A-Za-z]+\s?)*$/;
export const PhoneInputRegex = '[6-9][0-9]{9}';

export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);s
}

export const isLoggedIn = () => {
    if (localStorage.getItem('webToken')) {
        return true;
    }
    return false;
}

export const formatAmount = (amount) => {
    return amount?.toLocaleString("en-IN", { style: "currency", currency: "INR" });
}

export function ConvertToTimestamp(date) {
    return moment.utc(date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
}

export const handleConfirmation = () => {
    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
        return true;
    }
    return false;
};



