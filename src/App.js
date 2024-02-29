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
}

export default App;
