import Logo from './logo.png';
import './App.css';
import React from "react"; 
import React, { useState, useEffect } from "react";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function App() {

  const baseURL = "http://localhost:3000/";
  const[income, setIncome] = useState([]); 
  useEffect(() => {
    fetch(`${baseURL}branches`)
      .then((res) => res.json())
      .then((data) => {setBranches(data);}
      );
  }, []);






  return (
  
      <div className="App">
        <header className="App-header">
          
      
            <img id = "logo" src={Logo} alt="logo" />
           
          <div className = "Tax brackers"> 
            <table> 
            <tr> 
              <th>Minimum Income</th>
              <th>Maximum Income</th>
              <th>Household Status</th>
            </tr>
            {
              
            }
            </table> 
        
          </div>
        </header>
      </div>

    
    
  );
}

export default App;
