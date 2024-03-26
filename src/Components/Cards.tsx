import React, { useState } from "react";

function Cards({ setCurrentPage }) {
  const [accounts, setAccounts] = useState<string[]>(["445464"]); // Specify type string[] for accounts
  const [cards, setCards] = useState<
    { cardNumber: string; accountNumber: string; id: number }[]
  >([]);
  const [id, setId] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
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
    const selectedInput = document.querySelector('input[name="card"]:checked');
    if (selectedInput) {
      const selectedId = selectedInput.id;
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
    <div className="cards-showcards" key={card.id}>
      <input type="radio" id={card.id.toString()} name="card" value={card.id} />
      <label htmlFor={`${card.id}`}>Card Number: {card.cardNumber}</label>{" "}
      <br />
    </div>
  ));
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
      <div className="cards">
        <div className="cards-input">
          <h1>Modify & delete cards</h1>
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
          <button onClick={() => createNewCard(cardNumber)}>
            Create New Card
          </button>
          <button onClick={deleteCard}>Delete Card</button>
          <br />
        </div>
        <div className="cards-list-body">
          <div className="cards-list">{showCards}</div>
        </div>
      </div>
    </>
  );
}

export default Cards;
