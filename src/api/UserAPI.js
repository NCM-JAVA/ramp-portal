import AxiosAdmin from "./AxiosAdmin";

const UserAPI = {
    getAllUsers: () => AxiosAdmin.get("/users")
}

export default UserAPI;