const prod = {
  API_BASE_URL: "http://100.100.7.42:9003/api",
};
const dev = {
  // API_BASE_URL: 'http://103.223.15.161:8080/sms'
  API_BASE_URL: "http://100.100.7.42:9003/api",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
