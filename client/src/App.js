import Logo from './logo.png';
import './App.css';
import Navbar from "./components/Navbar";
import React from "react"; 
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import ContactUs from "./pages/Contact";
import Help from "./pages/Help"; 
import ReactDOM from 'react-dom/client';


ReactDOM.render (

  <Router> 
      <Navbar /> 
      <Routes> 
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<ContactUs />} />
          <Route path = "/help" element = {<Help />} />
      </Routes>
  </Router>,

  document.getElementById("root")
);

function App() {
    return (
    
      
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
  
    
    
    
        
   
        
  );
}

export default App;
