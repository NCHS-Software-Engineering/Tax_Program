import Logo from './logo.png';
import './App.css';
import React from "react"; 
import Navbar from "./components/Navbar"; 
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom"; 
import Home from "./pages"; 
import About from "./pages/about"; 
import ContactUs from "./pages/contact";
import Help from "./pages/help"; 


function App() {
    return (
    <Router> 
      <div>
      <Navbar />
      <Routes> 
        <Route exact path = "/" element = {<Home />} /> 
        <Route path = "/about" element = {<About /> } />
        <Route 
          path = "/contact" 
          element = {<ContactUs />} 
        />
        <Route path = "/help" element = {<Help /> } />
      </Routes>
      </div>
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
    </Router>
    
    
    
        
   
        
  );
}

export default App;
