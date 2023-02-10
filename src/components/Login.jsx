import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h3>ログインして始める</h3>
        <button onClick={loginInWithGoogle}>Googleでログイン</button>
      </div>
    </div>
  );
};

export default Login;
