import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import ContactUs from "./pages/Contact";
import Help from "./pages/Help"; 
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter> 
  <Navbar /> 
    <Routes> 
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<ContactUs />} />
        <Route path = "/help" element = {<Help />} />
    </Routes>
    </BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
