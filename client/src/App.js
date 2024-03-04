import './App.css';
import React from "react";

import Income from './Components/Incomemain/Income.jsx';

function App() {
  return (
    <div>
      <Income />
    </div>
  );
}


/*function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          
            <img id = "left" src={logo} alt="logo" />
            <h1>Tax Program</h1>
            <img id = "right" src={logo} alt="logo" />
           

        
            <form name = 'income'>
  <div>
    <label> What is your annual income (0-100k):</label>
    Income: <input
      type="number"
      name="income"
      min="0"
      max="100000"
      required />
    <span class="validity"></span>
    <input type="submit" onclick='check(); return false' />
  </div>
</form>


        </header>
      </div>
    </body>
  );
}*/

export default App;
