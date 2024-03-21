import "./App.css";
import React, { useState,useEffect } from "react";
import Login from './Components/Login.tsx';
import axios from 'axios';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [currentPage, setCurrentPage] = useState("Login");
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);

  switch (currentPage) {
    case "Login": return <Login 
      users={users} 
      setUsers={setUsers} 
      username={username} 
      setUsername={setUsername} 
      password={password} 
      setPassword={setPassword} 
      setCurrentPage={setCurrentPage}
      setCurrentUser={setCurrentUser} />;
    case "Register": return <Register 
      users={users} 
      setUsers={setUsers} 
      username={username} 
      setUsername={setUsername} 
      password={password} 
      setPassword={setPassword} 
      setCurrentPage={setCurrentPage}
      fullName={fullName}
      setFullName={setFullName} />;
    case 'Home' : return <Home 
      setCurrentPage={setCurrentPage} 
      currentUser={currentUser}/>;
    case 'Cards': return <Cards
      setCurrentPage={setCurrentPage} />
    case 'Dany': return <UserSettings 
      setCurrentPage={setCurrentPage} />
    case 'Ruben': return <UserModification
      users={users} 
      setUsers={setUsers} 
      setCurrentPage={setCurrentPage} />
    default:
      return null;
  }
}

function Home({setCurrentPage, currentUser}) {
  return (
    <div className="Home">
      <h1>Welcome, {currentUser}</h1>
      <button onClick={() => setCurrentPage("Cards")}>Your cards</button>
      <button onClick={() => setCurrentPage("Dany")}>Account information</button>
      <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
      <button onClick={() => setCurrentPage("Login")}>Log out</button>
    </div>
  );
}

function Cards({setCurrentPage}) {
  //Tarjetas de credito y debito
  const [accounts, setAccounts] = useState(["445464"]);
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState([]);
  const [id, setId] = useState(0);
  const addCard = (cardNumber, accountNumber) => {
    if (!accounts.includes(accountNumber)) {
      console.log("Account does not exist.");
    } else if (cardNumber in cards) {
      console.log("Card already exists.");
    } else {
      setCards((prevCards) => [
        ...prevCards,
        {
          cardNumber: cardNumber,
          accountNumber: accountNumber,
          id: id,
        },
      ]);
      setId(cards.length + 1);
      console.log("Card added successfully.");
    }
  };

  const deleteCard = () => {
    const selectedId = document.querySelector('input[name="card"]:checked').id;
    const cardIndex = cards.findIndex(
      (card) => card.id === parseInt(selectedId)
    );
    if (cardIndex !== -1) {
      const updatedCards = [...cards];
      updatedCards.splice(cardIndex, 1);
      setCards(updatedCards);
      console.log("Card deleted successfully.");
    } else {
      console.log("Card does not exist.");
    }
  };

  const createNewCard = (cardNumber) => {
    const accountNumbers = [...accounts]; // make a copy of the array so we don't mutate the original
    if (accountNumbers.length === 0) {
      console.log("No accounts available to create a card for.");
    } else {
      const randomAccountNumber =
        accountNumbers[Math.floor(Math.random() * accountNumbers.length)];
      addCard(cardNumber, randomAccountNumber);
    }
    console.log(cards);
  };

  const showCards = cards.map((card) => (
    <div className='cards-showcards' key={card.id}>
      <input type="radio" id={card.id} name="card" value={card.id} />
      <label htmlFor={card.id}>Card Number: {card.cardNumber}</label> <br />
    </div>
  ));
  return (
    <>
      <div className="nav-bar">
        <button onClick={() => {setCurrentPage("Home")}}>Home</button>
        <button onClick={() => setCurrentPage("Cards")}>Your cards</button>
        <button onClick={() => setCurrentPage("Dany")}>Account information</button>
        <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
        <button onClick={() => setCurrentPage("Login")}>Log out</button>
      </div>
      <div className="cards">
        <div className="cards-input">
          <h1>Modify & delete cards</h1>
          <label htmlFor="Card number">Enter your card number</label><br />
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          />
          <br />
          <button onClick={() => createNewCard(cardNumber)}>Create New Card</button>
          <button onClick={deleteCard}>Delete Card</button><br />
        </div>
        <div className="cards-list-body">
          <div className="cards-list">
            {showCards}
          </div>
        </div>
      </div>
    </>
  );
}

// function Login({
//   setCurrentPage,
//   users,
//   username,
//   setUsername,
//   password,
//   setPassword,
//   setCurrentUser
// }) {
//   return (
//     <div className="Form">
//       <div className="Form-head">
//         <h1>Login Page!</h1>
//         <p>Please enter your username and password</p>
//         <div className="Form-body">
//           <div className="Form-inputs">
//             <br />
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />{" "}
//             <br />
//             <br />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />{" "}
//           </div>
//           <br /><br />
//           <div className="Form-button">

//           </div>
//           <button
//             onClick={(e) => {
//               const user = users.find(
//                 (user) => user.username === username && user.password === password
//               );
//               console.log(username);
//               console.log(password);
//               console.log(user);
//               if (user) {
//                 e.preventDefault();
//                 setCurrentPage("Home");
//               } else {
//                 alert("Invalid Username or Password");
//               }
//               setCurrentUser(username);
//             }}
//           >
//             Log in
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setCurrentPage("Register");
//             }}
//           >
//             Create account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

function Register({
  setCurrentPage,
  users,
  setUsers,
  username,
  setUsername,
  password,
  setPassword,
  fullName,
  setFullName
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
            }} /><br /><br />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            /><br /><br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            </div>
            <div className="Form-button">

            </div>
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
                    id: id
                  },
                ]);
                setId(id + 1);
                const data = [
                  id,
                  fullName,
                  username,
                  password
                ]
                axios
                .post('http://localhost:3001/user', data)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
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
            </button><br />
        </div>
      </div>
    </div>
  );
}


function UserSettings({setCurrentPage}) {
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
      <div className="nav-bar">
        <button onClick={() => {setCurrentPage("Home")}}>Home</button>
        <button onClick={() => setCurrentPage("Cards")}>Your cards</button>
        <button onClick={() => setCurrentPage("Dany")}>Account information</button>
        <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
        <button onClick={() => setCurrentPage("Login")}>Log out</button>
      </div>
    <div className="user">
      <div className="user-settings">
        <div className="user-settings-input">
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
            /><br />
            <input
              type="text"
              name="transferNumber"
              placeholder="Transfer Number"
              value={newAccount.transferNumber}
              onChange={handleChange}
              required
            /><br />
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
            </select><br />
            <button type="submit">{editingIndex !== null ? 'Save' : 'Register'}</button>
          </form>
        </div>
        <div className="user-settings-list">
          <ul>
            {bankAccounts.map((account, index) => (
              <li key={index}>
                <span>Account Number: {account.accountNumber}</span><br />
                <span>Transfer Number: {account.transferNumber}</span><br />
                <span>Bank: {account.bank}</span><br />
                <button onClick={() => handleEditClick(index)}>Edit</button><br />
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
            <button type="submit">Save</button><br />
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

function UserModification({
  setCurrentPage,
  users,
  setUsers
}) {
  const [modUser, setModUser] = useState("");
  const [modPass, setModPass] = useState("");



  const showUsers = users.map((user, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <input placeholder="Username" onChange={(e) => setModUser(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setModPass(e.target.value)} />
        <button onClick={(e) =>{
          e.preventDefault();
          const updatedUsers = [...users];
          updatedUsers.splice(index, 1, { ...user, username: modUser, password: modPass });
          setUsers(updatedUsers);
          }}>Edit</button>
      </tr>
  ));
  return (
    <div className="mod-user">
      <div className="nav-bar">
        <button onClick={() => {setCurrentPage("Home")}}>Home</button>
        <button onClick={() => {setCurrentPage("Cards")}}>Your cards</button>
        <button onClick={() => {setCurrentPage("Dany")}}>Account information</button>
        <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
        <button onClick={() => {setCurrentPage("Login")}}>Log out</button>
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
        {showUsers}<br />
      </table>
      </div>
    </div>
  );
}
export default App;
