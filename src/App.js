import './App.css';
import React, { useState } from 'react';




function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
  <signIn>
    <div className="App">
      <div>
        <h1>Register User</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="username">Username</label><br/>
          <input 
            value={username}
            onChange={e => {
            setUsername(e.target.value);
            }}
            /><br/>
          <label for="pass">Password</label><br/>
          <input 
            
            onChange={e => {
              setPassword(e.target.value)
            }}
            /><br/>
          <button type='submit'>
          submit
          </button><br/>
          <h1>
            Username: {username}<br/>
            Password: {password}
          </h1>
        </form>
      </div>
    </div>
  </signIn>
  );
}

export default App;
