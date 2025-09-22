import Logo from './logo.png';
import './App.css';
import React from "react"; 
import { useState, useEffect } from "react";
import Income from './components/IncomeMain/income.jsx';
import Footer from "./components/Footer.js";

function App() {
  return (
    
  
      <div className="App">
        <header className="App-header">
       
      
            <img id = "logo" src={Logo} alt="Tax Program" />
          
            <div>
              <Income />
            </div>
        
            
            <Footer />
        </header>
      </div>

    
    
  );
}

export default App;
