import Logo from './logo.png';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          
            <h1>Tax Program</h1>
          
          <img src={Logo} className="App-logo-left" alt="logo" />
          <img src={Logo} className="App-logo-right" alt="logo" />
          
        
        </header>
      </div>
    </body>
  );
}

export default App;
