import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const handleLogin = ()=>{
    window.location.href ="/products";
  }
  return (
    <div>Login <br />
      <input data-cy="login-email" placeholder="Enter Email"/><br />
      <input data-cy="login-password" placeholder="Enter Password"/><br />
      <button data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
