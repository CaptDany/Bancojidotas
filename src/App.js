import './App.css';
import React, { useState } from 'react';


function App() {
const [ signIn, setSignIn ] = useState(false);
const [regUser, setRegUser] = useState('');
const [regPass, setRegPass] = useState('');







    if(!signIn){
        return(
        <div className="App">
            {Me(regPass, regUser, setRegUser, setRegPass,signIn, setSignIn)} 
        </div>
        );
    } else{
        return(
            <div>
                {Cards()}
            </div>
        )
    }
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
        <div>
          <button onClick={createNewCard}>Create New Card</button>
          <button onClick={() => deleteCard("987654321")}>Delete Card</button>
        </div>
  );
}


function Me(regPass, regUser, setRegUser, setRegPass,signIn, setSignIn){
    let users = [];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    console.log(users);

    if(!register){
        return(
            <div>
                <h1>Login Page!</h1>
                <p>Please enter your username and password</p>
                <label htmlFor='username'>Username</label><br />
                <input type="text" value={username} onChange={e => {setUsername(e.target.value);}}/> <br />
                <label htmlFor='Password'>Password</label><br />
                <input type="password" value={password} onChange={e => {setPassword(e.target.value);}}/> <br />
                <button onClick={() => {
                    if(username === users.find(user => user.username === username) && password === users.find(user => user.password === password)){
                        setSignIn(true);
                    }else{
                        alert("Invalid Username or Password");
                    }
                }}>Log in</button>
                <button onClick={() => {
                    setRegister(true);
                }}>Register</button>
            </div>
        )
    }else{
        return(
            <div className="App">
            <div>
                <h1>Register User</h1>
            </div>
            <div>
                <form>
                    {console.log(users)}
                    <label for="username">Username</label><br/>
                    <input value={username} onChange={e => {setUsername(e.target.value);}}/>
                    <br/>
                    <label for="pass">Password</label><br/>
                    <input onChange={e => {setPassword(e.target.value)}}/>
                    <br/>
                    <button type='submit' onClick={(e) => {
                        e.preventDefault();
                        setRegUser(username);
                        setRegPass(password);
                        users.push({
                            username: username,
                            password: password
                        })
                        console.log('username: ',username,'password: ', password, 'Users: ', users);
                    }}>submit</button>
                    <button 
                    onClick={()=> {
                        setRegister(true);
                    }}>Log in</button>
                    <br/>
                    <h1>
                        Registered Username: {regUser}<br/>
                        Registered Password: {regPass}<br/>
                    </h1>
                </form>
            </div>
        </div>
        )
    }
    
};



export default App;
