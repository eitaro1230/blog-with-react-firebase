import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Logout.css";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className="logoutPage">
      <div className="logoutContainer">
        <h3>ログアウトする</h3>
        <button onClick={logout}>ログアウト</button>
      </div>
    </div>
  );
};

export default Logout;
