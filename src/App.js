import React, { useState } from 'react';
import "./App.css";

function App() {
  // State variables for user data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  });

  // Function to handle form submission for user data
  const handleSubmitUserData = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log('User data submitted:', userData);
    // Clear form fields after submission
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: ''
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
    accountNumber: '',
    transferNumber: '',
    bank: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form submission for registering a new bank account
  const handleRegister = (event) => {
    event.preventDefault();
    setBankAccounts([...bankAccounts, newAccount]);
    setNewAccount({
      accountNumber: '',
      transferNumber: '',
      bank: ''
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
      accountNumber: '',
      transferNumber: '',
      bank: ''
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
    <div>
      <h1>User Settings</h1>
      <h2>Bank Accounts</h2>
      <form onSubmit={editingIndex !== null ? handleEdit : handleRegister}>
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={newAccount.accountNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="transferNumber"
          placeholder="Transfer Number"
          value={newAccount.transferNumber}
          onChange={handleChange}
          required
        />
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
        <button type="submit">{editingIndex !== null ? 'Save' : 'Register'}</button>
      </form>
      <ul>
        {bankAccounts.map((account, index) => (
          <li key={index}>
            <span>Account Number: {account.accountNumber}</span>
            <span>Transfer Number: {account.transferNumber}</span>
            <span>Bank: {account.bank}</span>
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    <div>
    <div>
        <h2>User Data</h2>
        {/* User data form */}
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
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
