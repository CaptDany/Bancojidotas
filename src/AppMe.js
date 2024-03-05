import './App.css';
import React, { useState } from 'react';




function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [regUser, setRegUser] = useState('');
  const [regPass, setRegPass] = useState('');


  return (
  <signIn>
    <div className="App">
      <div>
        <h1>Register User</h1>
      </div>
      <div>
        <form>
          <label for="username">Username</label><br/>
          <input 
            value={username}
            onChange={e => {
            setUsername(e.target.value);
            }}/>
            <br/>
          <label for="pass">Password</label><br/>
          <input
            onChange={e => {
              setPassword(e.target.value)
            }}/>
            <br/>
          <button type='submit' onClick={(e) => {
            e.preventDefault();
            setRegUser(username);
            setRegPass(password);
            console.log('username: ',username,'password: ', password,'test: ', test);
          }}>
          submit
          </button><br/>
          <h1>
            Registered Username: {regUser}<br/>
            Registered Password: {regPass}<br/>
          </h1>
        </form>
      </div>
    </div>
  </signIn>
  );
}

export default App;
