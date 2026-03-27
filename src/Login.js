import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
 
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkPassword = (username,password)=>
  {
    if (username === "admin" && password === "admin") 
      return true;
      else
      return false;
  }
/*
  const handleClick = (e) => {
   // console.log("inside handle");

    if (username === "admin" && password === "admin") {
      console.log("inside");
      navigate("/dashboard");
    } else {
      alert("Invalid Login Credentials...");
      navigate("/login");
    }
  };*/

  const handleLogin = async (e) => {
  e.preventDefault();

 try {
    await checkPassword(username, password);
    setTimeout(navigate, 0, "/dashboard");
  } catch (error) {
    console.log(error);
    alert("Invalid Login Credentials...");
    navigate("/login");
  }

};


  return (
    <div className="loginDiv">
      <div>
        <h1>Welcome to Monica's React Hooks</h1>
        <h2>Login</h2>
      <form>
        <input
          className="username"
          id="usernameid"
          type="text"
          required="required"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <input
          className="password"
          id="passwordid"
          type="password"
          required="required"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        </form>
        <br />
        <br />
        <small>username : <b>admin </b>
        < br/> password : <b>admin</b> </small>
      </div>
    </div>
  );
};
export default Login;
