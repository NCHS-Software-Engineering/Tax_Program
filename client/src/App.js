import Logo from './logo.png';
import './App.css';


function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          
            <h1>Tax Program</h1>
            <img id = "left" src={Logo} alt="logo" />
            <img id = "right" src={Logo} alt="logo" />

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
