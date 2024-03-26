import React from "react";

function Home({ setCurrentPage, currentUser }) {
  return (
    <div className="Home">
      <h1>Welcome, {currentUser}</h1>
      <button onClick={() => setCurrentPage("Cards")}>Your cards</button>
      <button onClick={() => setCurrentPage("Dany")}>
        Account information
      </button>
      <button onClick={() => setCurrentPage("Ruben")}>Update account</button>
      <button onClick={() => setCurrentPage("Login")}>Log out</button>
    </div>
  );
}

export default Home;
