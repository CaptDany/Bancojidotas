import React, { useState } from "react";

function Register({
  setCurrentPage,
  users,
  setUsers,
  username,
  setUsername,
  password,
  setPassword,
  fullName,
  setFullName,
}) {
  const [id, setId] = useState(0);
  return (
    <div className="Form">
      <div className="Form-head">
        <h1>Register User</h1>
        <p>Please create a username and password</p>
        <div className="Form-body">
          <div className="Form-inputs">
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="Form-button"></div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setUsername(username);
              setPassword(password);
              setUsers((users) => [
                ...users,
                {
                  fullname: fullName,
                  username: username,
                  password: password,
                  id: id,
                },
              ]);
              setId(id + 1);
              console.log(users);
            }}
          >
            Save
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("Login");
            }}
          >
            Back to Login
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Register;
