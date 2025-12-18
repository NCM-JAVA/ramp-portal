import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slice/AuthSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());       // Clears redux state + localStorage
    navigate("/auth/login");       // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "8px 16px",
        background: "red",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
