import { config } from "../constants";

export const getApiUrl = (endpoint) => {
  return config.API_BASE_URL + endpoint;
};

//auth
export const LOGIN = getApiUrl("/auth/login");
export const REGISTER = getApiUrl("/auth/user-register");
