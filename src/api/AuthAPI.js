import axiosClient from "./AxiosClient";

const authApi = {
  login: (data) => axiosClient.post("/admin/login", data),
  register: (data) => axiosClient.post("/register", data),
  // logout: () => axiosClient.post("/logout"),
};

export default authApi;
