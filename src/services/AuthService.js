import axios from "axios";
import { LOGIN, REGISTER } from "./url";

class AuthServiceClass {
  async loginService(data) { 
    console.log(data);
       
    const headers = {
      "Content-Type": "application/json",
    };

    return await axios.post(`${LOGIN}`, data, {
      headers: headers,
    });
  }
  
  async registerService(data) {
    const headers = {
      "Content-Type": "application/json",
    };

    return await axios.post(`${REGISTER}`, data, {
      headers: headers,
    });
  }
}

const AuthService = new AuthServiceClass();

export default AuthService;
