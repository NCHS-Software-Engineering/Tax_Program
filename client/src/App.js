import Logo from './logo.png';
import './App.css';
import React from "react"; 
import { useState, useEffect } from "react";
import Income from './components/IncomeMain/income.jsx';

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


  const baseURL = "http://localhost:2200/";

  const[incomes, setIncomes] = useState([]); 
  useEffect(() => {
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {setIncomes(data);}
      );
  }, []);
  





  return (
    
  
      <div className="App">
        <header className="App-header">
      
            <img id = "logo" src={Logo} alt="logo" />
            
           
          <div className = "Tax-brackets"> 
            <table> 
            <thead>
            <tr> 
              <th>Minimum Income</th>
              <th>Maximum Income</th>
              <th>Head of HouseHold</th>
              <th>Single</th>
              <th>Married Filing Seperately</th>
              <th>Married Filing Jointly</th>
            </tr>
            </thead>
            <tbody>
            {
              incomes.map((income, index) => (
              <tr key={index}>
                <td> {income.Min} </td>
                <td> {income.Max} </td>
                <td> {income.HeadHousehold} </td>
                <td> {income.Single} </td>
                <td> {income.MarriedSeperately} </td>
                <td> {income.MarriedJointly} </td>
              </tr>
            ))}
            </tbody>
            </table> 
            <div>
              <Income />
            </div>
        
          </div>
        </header>
      </div>

    
    
  );
}

export default App;
