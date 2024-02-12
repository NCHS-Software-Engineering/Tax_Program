import Logo from './logo.png';
import './App.css';
import React from "react"; 
import Navbar from "./components/Navbar"; 
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom"; 
import About from "./pages/about"; 


function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          
      
            <img id = "logo" src={Logo} alt="logo" />
           
          <div className = "Tax brackers"> 
            <table> 
            <tr> 
              <th>Income</th>
              <th>Household Status</th>
              <th>Tax Owed</th>
            </tr>
            </table> 
        
          </div>
        </header>
      </div>
    </body>
        
   
        
  );
}

export default App;
