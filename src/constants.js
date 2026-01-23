const prod = {
  API_BASE_URL: "http://127.0.0.1:8000/api",
};
const dev = {
  // API_BASE_URL: 'http://103.223.15.161:8080/sms'
  API_BASE_URL: "http://127.0.0.1:8000/api",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
