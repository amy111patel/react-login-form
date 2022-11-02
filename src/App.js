import React from "react";
import './App.css';

function App() {

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="panel">
          <form action="" method="post">

          <div className="panel-group">
              <input className="input" type="text" required />
              <span className="border"></span>
              <label>Username</label>
          </div>

          <div className="panel-group">
              <input className="input" type="password" required />
              <span className="border"></span>
              <label>Password</label>
          </div>

          <button type="submit" className="login-btn">Login</button>

          </form>

          <div className="panel-footer">
              <p><a href="https://#">Forgotten password?</a></p>
              <p>Not a member? <a href="https://#">Sign up now</a></p>
          </div>

      </div>
    </div>

  );
}

export default App;
