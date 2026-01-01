import axios from "axios";

const AxiosAdmin = axios.create({
    baseURL: process.env.REACT_APP_ADMIN_API_BASE_URL || "http://127.0.0.1:8000/api/admin",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Add Authorization token automatically
AxiosAdmin.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Global Error Handler
AxiosAdmin.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("Admin unauthorized, redirect to login");
            // Example:
            // window.location.href = "/admin/login";
        }
        return Promise.reject(error);
    }
);

export default AxiosAdmin;

