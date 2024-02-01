import './App.css';
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import "./App.css";
 
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>
                </div>
                <form>
  <div>
    <label for="income">Annual income (0-100k):</label>
    <input
      id="income"
      type="number"
      name="income"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>


            </Router>
            
        );
    }
}
 
export default App;


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
         />
      </header>
    </div>
  );
}
*/