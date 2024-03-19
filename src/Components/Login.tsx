import "../App.css";
import React from "react";

function Login({
    setCurrentPage,
    users,
    username,
    setUsername,
    password,
    setPassword,
    setCurrentUser
  }) {
    return (
      <div className="Form">
        <div className="Form-head">
          <h1>Login Page!</h1>
          <p>Please enter your username and password</p>
          <div className="Form-body">
            <div className="Form-inputs">
              <br />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />{" "}
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
            </div>
            <br /><br />
            <div className="Form-button">
  
            </div>
            <button
              onClick={(e) => {
                const user = users.find(
                  (user) => user.username === username && user.password === password
                );
                console.log(username);
                console.log(password);
                console.log(user);
                if (user) {
                  e.preventDefault();
                  setCurrentPage("Home");
                } else {
                  alert("Invalid Username or Password");
                }
                setCurrentUser(username);
              }}
            >
              Log in
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("Register");
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Login;