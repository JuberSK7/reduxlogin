import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import "./style.css";

const Logout = () => {
  const dispatch = useDispatch();
  const handleCllick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="form-container">
      <div className="logout">
        <h1>Welcome to Eminds</h1>
        <button className="logout-btn" onClick={(e) => handleCllick(e)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
