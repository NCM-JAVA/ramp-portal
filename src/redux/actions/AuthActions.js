import { saveUserDetails } from "../slices/AuthSlice";
import AuthService from "../../services/AuthService";
import store from "../Store";
import { notifyError, notifySuccess } from "../../components/toast/ToastContext";

export function LoginAction(data) {
  console.log('actions login -- ', data);

  return new Promise((resolve, reject) => {

    AuthService.loginService(data)
      .then((res) => {
        console.log("login res ramp", res);
        if (res.status === 200) {
          // Handle successful response
          // notifySuccess("data saved successfully");
          // window.location = "/account";
        } else {
          // Handle other status codes
          notifyError("Error: Unexpected status code received");
        }
        store.dispatch(saveUserDetails(res.data));
        resolve(res);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          const message =
            error.response.data?.message ||
            "Invalid email or password";

          // optional toast
          notifyError(message);

          resolve({
            success: false,
            errors: message, // keep it SIMPLE (string)
          });
          // Redirect to login page if unauthorized
          // window.location = "/";
        } else if (error?.response?.status === 500) {
          // Handle internal server error gracefully
          notifyError(
            "Error: Internal server error occurred. Please try again later."
          );
          resolve({
            success: false,
            errors: {
              email: [
                error.response.data ||
                "Invalid email or password",
              ],
            },
          });
        } else {
          // Handle other errors
          console.log("Error:", error);
          console.log("STATUS:", error.response?.status);
          console.log("ERROR DATA:", error.response?.data);
          notifyError("Error: Something went wrong. Please try again later.");
          resolve({
            success: false,
            errors: error.response?.data || error.response.data.message,
          });
        }
        resolve(error);
      });
  });
}

export function registerAction(data) {
  return new Promise((resolve, rejact) => {
    AuthService.registerService(data)
      .then((res) => {
        console.log("register res", res);
        if (res.status === 200 && !res?.data?.error) {
          notifySuccess("register successfully");
          //window.location = "/";
        }
        resolve(res);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          // Redirect to login page if unauthorized
          //window.location = "/";
        } else if (error?.response?.status === 500) {
          // Handle internal server error gracefully
          console.log("Internal Server Error:", error);
          notifyError(
            "Error: Internal server error occurred. Please try again later."
          );
        } else {
          // Handle other errors
          console.log("Error:", error);
          notifyError("Error: Something went wrong. Please try again later.");
        }
        resolve(error);
      });
  });
}
