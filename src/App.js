import "./App.css";
import React, { useState } from "react";

let isSignedIn = false;

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState("Login");
  const [users, setUsers] = useState([]);

  let content;
  if (isSignedIn) {
    content = <Cards />;
  } else if (currentPage === "Register") {
    content = (
      <Register
        users={users}
        setUsers={setUsers}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setCurrentPage={setCurrentPage}
      />
    );
  } else {
    content = (
      <Login
        users={users}
        setUsers={setUsers}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return <div className="App">{content}</div>;
}

function Cards() {
  //Tarjetas de credito y debito
  const [accounts, setAccounts] = useState(['445464']);
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState([])
  let card = 'abc';

  const addCard = (cardNumber, accountNumber) => {
    if (!(accountNumber in accounts)) {
      console.log("Account does not exist.");
    } else if (cardNumber in cards) {
      console.log("Card already exists.");
    } else {
      setCards((prevCards) => ({
        ...prevCards,
        [cardNumber]: { cardNumber, accountNumber },
      }));
      console.log("Card added successfully.");
    }
  };

  const deleteCard = (cardNumber) => {
    if (!(cardNumber in cards)) {
      console.log("Card does not exist.");
    } else {
      const updatedCards = { ...cards };
      delete updatedCards[cardNumber];
      setCards(updatedCards);
      console.log("Card deleted successfully.");
    }
  };

  const createNewCard = (cardNumber) => {
    const randomCardNumber = Math.floor(Math.random() * 1000000000);
    const accountNumbers = Object.keys(accounts);
    if (accountNumbers.length === 0) {
      console.log("No accounts available to create a card for.");
    } else {
      const randomAccountNumber =
        accountNumbers[Math.floor(Math.random() * accountNumbers.length)];
      addCard(cardNumber, randomAccountNumber);
    }
    console.log(cards);
  };

  const showCards = () => {
    const cardlist = cards.map();
    card = cardlist[0];
    return (
      <div>
        <ul>{card}
        {console.log(card)}
        </ul>
      </div>
    );
  };
  return (
    <div>
      <label htmlFor="Card number">Enter your card number</label><br />
      <input 
      type="CardNumber"
      value={cardNumber}
      onChange={(e) => {
        setCardNumber(e.target.value)
      }}/><br />
      <button onClick={() => createNewCard(cardNumber)}>Create New Card</button>
      <button onClick={() => deleteCard("987654321")}>Delete Card</button>
      <div>
        {showCards}
        <ul>swagggg</ul>
      </div>
    </div>
  );
}

function Login({
  setCurrentPage,
  users,
  setUsers,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <div>
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
        Register
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
            submit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("Login");
              //setRegister(true);
            }}
          >
            Log in
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
