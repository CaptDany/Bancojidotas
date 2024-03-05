import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

function Cards(){ //Tarjetas de credito y debito
  const [accounts, setAccounts] = useState({});
  const [cards, setCards] = useState({});

  const addCard = (cardNumber, accountNumber) => {
      if (!(accountNumber in accounts)) {
          console.log("Account does not exist.");
      } else if (cardNumber in cards) {
          console.log("Card already exists.");
      } else {
          setCards(prevCards => ({
              ...prevCards,
              [cardNumber]: { cardNumber, accountNumber }
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

  const createNewCard = () => {
    const randomCardNumber = Math.floor(Math.random() * 1000000000);
    const accountNumbers = Object.keys(accounts);
    if (accountNumbers.length === 0) {
        console.log("No accounts available to create a card for.");
    } else {
        const randomAccountNumber = accountNumbers[Math.floor(Math.random() * accountNumbers.length)];
        addCard(randomCardNumber, randomAccountNumber);
    }
    };

  return (
    <Barucq>
        <div>
        <button onClick={createNewCard}>Create New Card</button>
        <button onClick={() => deleteCard("987654321")}>Delete Card</button>
        </div>
    </Barucq>
    );
}




export default Cards;
