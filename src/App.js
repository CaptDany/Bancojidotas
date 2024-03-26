import "./App.css";
import React, { useState } from "react";

import Login from "./Components/Login.tsx";
import Register from "./Components/Register.tsx";
import Home from "./Components/Home.tsx";
import Cards from "./Components/Cards.tsx";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [currentPage, setCurrentPage] = useState("Login");
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);

  switch (currentPage) {
    case "Login":
      return (
        <Login
          users={users}
          setUsers={setUsers}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setCurrentPage={setCurrentPage}
          setCurrentUser={setCurrentUser}
        />
      );
    case "Register":
      return (
        <Register
          users={users}
          setUsers={setUsers}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setCurrentPage={setCurrentPage}
          fullName={fullName}
          setFullName={setFullName}
        />
      );
    case "Home":
      return <Home setCurrentPage={setCurrentPage} currentUser={currentUser} />;
    case "Cards":
      return <Cards setCurrentPage={setCurrentPage} />;
    case "Dany":
      return <UserSettings setCurrentPage={setCurrentPage} />;
    case "Ruben":
      return (
        <UserModification
          users={users}
          setUsers={setUsers}
          setCurrentPage={setCurrentPage}
        />
      );
    default:
      return null;
  }
}

function UserSettings({ setCurrentPage }) {
  // State variables for user data
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  // Function to handle form submission for user data
  const handleSubmitUserData = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log("User data submitted:", userData);
    // Clear form fields after submission
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    });
  };

  // Function to handle input changes for user data
  const handleChangeUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // State variables to manage user's bank accounts
  const [bankAccounts, setBankAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    accountNumber: "",
    transferNumber: "",
    bank: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form submission for registering a new bank account
  const handleRegister = (event) => {
    event.preventDefault();
    setBankAccounts([...bankAccounts, newAccount]);
    setNewAccount({
      accountNumber: "",
      transferNumber: "",
      bank: "",
    });
  };

  // Function to handle form submission for editing an existing bank account
  const handleEdit = (event) => {
    event.preventDefault();
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[editingIndex] = newAccount;
    setBankAccounts(updatedAccounts);
    setEditingIndex(null);
    setNewAccount({
      accountNumber: "",
      transferNumber: "",
      bank: "",
    });
  };

  // Function to handle form submission for deleting a bank account
  const handleDelete = (index) => {
    const updatedAccounts = bankAccounts.filter((_, i) => i !== index);
    setBankAccounts(updatedAccounts);
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  // Function to handle edit button click
  const handleEditClick = (index) => {
    setEditingIndex(index);
    setNewAccount(bankAccounts[index]);
  };

  return (
    <>
      <div className="nav-bar">
        <button
          onClick={() => {
            setCurrentPage("Home");
          }}
        >
          Home
        </button>
        <button onClick={() => setCurrentPage("Cards")}>Your cards</button>
        <button onClick={() => setCurrentPage("Dany")}>
          Account information
        </button>
        <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
        <button onClick={() => setCurrentPage("Login")}>Log out</button>
      </div>
      <div className="user">
        <div className="user-settings">
          <div className="user-settings-input">
            <h1>User Settings</h1>
            <h2>Bank Accounts</h2>
            <form
              onSubmit={editingIndex !== null ? handleEdit : handleRegister}
            >
              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                value={newAccount.accountNumber}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="text"
                name="transferNumber"
                placeholder="Transfer Number"
                value={newAccount.transferNumber}
                onChange={handleChange}
                required
              />
              <br />
              <select
                name="bank"
                value={newAccount.bank}
                onChange={handleChange}
                required
              >
                <option value="">Select Bank</option>
                <option value="Banamex">Banamex</option>
                <option value="American Express">American Express</option>
                <option value="Wells Fargo">Wells Fargo</option>
              </select>
              <br />
              <button type="submit">
                {editingIndex !== null ? "Save" : "Register"}
              </button>
            </form>
          </div>
          <div className="user-settings-list">
            <ul>
              {bankAccounts.map((account, index) => (
                <li key={index}>
                  <span>Account Number: {account.accountNumber}</span>
                  <br />
                  <span>Transfer Number: {account.transferNumber}</span>
                  <br />
                  <span>Bank: {account.bank}</span>
                  <br />
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                  <br />
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="user-data">
            <h2>User Data</h2>
            <form onSubmit={handleSubmitUserData}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstName}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={userData.phone}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userData.address}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={userData.city}
                onChange={handleChangeUserData}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={userData.state}
                onChange={handleChangeUserData}
                required
              />
              <button type="submit">Save</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function UserModification({ setCurrentPage, users, setUsers }) {
  const [modUser, setModUser] = useState("");
  const [modPass, setModPass] = useState("");

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>{user.fullname}</td>
      <td>{user.username}</td>
      <td>{user.password}</td>
      <input
        placeholder="Username"
        onChange={(e) => setModUser(e.target.value)}
      />
      <input
        placeholder="Password"
        onChange={(e) => setModPass(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          const updatedUsers = [...users];
          updatedUsers.splice(index, 1, {
            ...user,
            username: modUser,
            password: modPass,
          });
          setUsers(updatedUsers);
        }}
      >
        Edit
      </button>
    </tr>
  ));
  return (
    <div className="mod-user">
      <div className="nav-bar">
        <button
          onClick={() => {
            setCurrentPage("Home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setCurrentPage("Cards");
          }}
        >
          Your cards
        </button>
        <button
          onClick={() => {
            setCurrentPage("Dany");
          }}
        >
          Account information
        </button>
        <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
        <button
          onClick={() => {
            setCurrentPage("Login");
          }}
        >
          Log out
        </button>
      </div>
      <div className="mod-user-input">
        <h1>Modificación de Datos del Usuario</h1>
        <table>
          <tr>
            <th> ID </th>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
          {showUsers}
          <br />
        </table>
      </div>
    </div>
  );
}
export default App;
