import "./App.css";
import React, { useState } from "react";

let isSignedIn = false;

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
    case 'Cards': return <Cards />
    default:
      return null;
  }
}

function Cards() {
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
    <div className="App">
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
      <button
        onClick={(e) => {
          const user = users.find(
            (user) => user.username === username && user.password === password
          );
          console.log(username);
          console.log(password);
          console.log(user);
          if (user) {
            isSignedIn = true;
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
              //setRegister(true);
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

export default App;
