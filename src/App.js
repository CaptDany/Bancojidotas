import "./App.css";
import React, { useState,useEffect } from "react";
import axios from 'axios';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState("Login");
  const [users, setUsers] = useState([]);

  switch (currentPage) {
    case "Login": return <Login 
      users={users} 
      setUsers={setUsers} 
      username={username} 
      setUsername={setUsername} 
      password={password} 
      setPassword={setPassword} 
      setCurrentPage={setCurrentPage} />;
    case "Register": return <Register 
      users={users} 
      setUsers={setUsers} 
      username={username} 
      setUsername={setUsername} 
      password={password} 
      setPassword={setPassword} 
      setCurrentPage={setCurrentPage} />;
    case 'Cards': return <Cards
      setCurrentPage={setCurrentPage} />
    case 'Dany': return <Daniel 
      setCurrentPage={setCurrentPage} />
    case 'Ruben': return <UserModification setCurrentPage={setCurrentPage} />
    default:
      return null;
  }
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
    <div key={card.id}>
      <input type="radio" id={card.id} name="card" value={card.id} />
      <label htmlFor={card.id}>Card Number: {card.cardNumber}</label> <br />
    </div>
  ));
  return (
    <div className="App">
      <label htmlFor="Card number">Enter your card number</label>
      <br />
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(e.target.value);
        }}
      />
      <br />
      <button onClick={() => createNewCard(cardNumber)}>Create New Card</button>
      <button onClick={deleteCard}>Delete Card</button>
      <button onClick={() => console.log(cards)}>Show Cards</button>
      <br />
      <button onClick={(e) => {
        e.preventDefault() 
        setCurrentPage("Dany")}}>Daniel's Page</button><br />
      <button onClick={(e) => {
        e.preventDefault() 
        setCurrentPage("Login")}}>Log out</button><br />
      <div>{showCards}</div>
    </div>
  );
}

function Login({
  setCurrentPage,
  users,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <div className="Login">
      <h1>Login Page!</h1>
      <p>Please enter your username and password</p>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="Password">Password</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <br />
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
            setCurrentPage("Cards");
          } else {
            alert("Invalid Username or Password");
          }
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
      <button
        onClick={() => {
          setCurrentPage('Ruben')
        }}>
          Ruberto
        </button>
    </div>
  );
}

function Register({
  setCurrentPage,
  users,
  setUsers,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <div className="App">
      <div>
        <h1>Register User</h1>
        <p>Please create a username and password</p>
      </div>
      <div>
        <form>
          <label for="username">Username</label>
          <br />
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label for="pass">Password</label>
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setUsername(username);
              setPassword(password);
              setUsers((users) => [
                ...users,
                {
                  username: username,
                  password: password,
                },
              ]);
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
        </form>
      </div>
    </div>
  );
}


function Daniel({setCurrentPage}) {
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
          <button type="submit">Save</button><br />
          <button onClick={(e) => {
        e.preventDefault() 
        setCurrentPage("Login")}}>Log out</button><br />
        </form>
      </div>
    </div>
    </>
  );
}

function UserModification({setCurrentPage}) {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    // Otros campos de usuario que necesites modificar
  });

  useEffect(() => {
    // Cargar los datos del usuario al montar el componente
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Suponiendo que el id del usuario esté disponible en algún contexto
      //const userId = getUserId(); // Esta función debe ser definida para obtener el ID del usuario actual
      //const response = await axios.get(`/api/users/${userId}`);
      //setUserData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //const userId = getUserId(); // Obtener el ID del usuario actual
      //await axios.put(`/api/users/${userId}`, userData);
      // Puedes mostrar un mensaje de éxito o redireccionar a otra página después de la modificación
      console.log('Datos del usuario modificados con éxito');
    } catch (error) {
      console.error('Error al modificar los datos del usuario:', error);
    }
  };

  return (
    <div>
      <h1>Modificación de Datos del Usuario</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" value={userData.email} onChange={handleInputChange} required />
        {/* Agrega más campos según las necesidades de tu aplicación */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}
export default App;
