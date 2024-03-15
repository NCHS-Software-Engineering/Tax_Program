//import logo from '../images/logo.png';
import { useState, useEffect } from "react";
import './income.css';

function Income(err, Result, Fields) {

  const baseURL = "http://localhost:8000/";
  const[incomes, setIncomes] = useState([]); 
  useEffect(() => {
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {setIncomes(data);}
      );
  }, []);

  const [getIncome, setIncome] = useState('');  
  const [getStatus, setStatus] = useState(''); 
  const [getTax, setTax] = useState('');

  function Tax(props){
    
    let val = getIncome;
    for(let i = 0; incomes.Min; i++)
    {
      if(val < incomes.Max[i] & val > incomes.Min[i]){
        if(getStatus === "Head"){
          val = incomes.HeadHouseHold[i]
         }
        else if(getStatus === "Head"){
         val = incomes.Single[i]
          }
        else if(getStatus === "Head"){
          val = incomes.MarriedSeperately[i]
          }
        else if(getStatus === "Head"){
          val = incomes.MarriedJointly[i]
          }
        else {
          val = 200
        }
        break
      }
    }
    //document.write(incomes.HeadHouseHold[i])

      props.setTax(val)

  }


    return (

      <body>
        <div className="App">
          <header className="App-header">
        
          </header>
          <body className="App-body">
          <IncomeForm setIncome = {setIncome}/>
              
              <StatusForm setStatus = {setStatus}/>
              
              <Tax setTax = {setTax}/>
              <p4>Your tax amount is {getTax}$</p4>
          </body>
        </div>
      </body>
    );
  }

  function StatusForm(props){
    const[getS, setS] = useState()
    const SValue = (e) => setS(e.target.value);

      function ButtonClick(e){
          e.preventDefault()
          alert("Thanks for submitting!")
          props.setStatus(getS)
          setS("")
      } 

      return (
        <form>
          <div>
          <label>What is your household status?</label>
          <select value={getS} onChange={SValue}>
            <option value=""> </option>
            <option value="Single">Single</option>
            <option value="Jointly">Married filing jointly</option>
            <option value="Seperately">Married filing seperately</option>
            <option value="Head">Head of Household</option>
          </select>
          <button onClick={ButtonClick} type="submit">Submit</button>
          </div>
        </form>
      )
  }

  function IncomeForm(props){
    const[getI, setI] = useState()
    const IValue = (e) => setI(e.target.value);

      function ButtonClick(e){
          e.preventDefault()
          alert("Thanks for submitting!")
          props.setIncome(getI)
          setI("")
      } 
        return(
      <form name = 'income'>
          <div>
            <label> What is your annual income (0-100k):</label>
            <input value={getI} onChange={IValue}
              type="number"
              name="income"
              min="0"
              max="100000"
              required />
            <span class="validity"></span>
            <button onClick={ButtonClick} type="submit">Submit</button>
          </div>
        </form>
      )
    }


  export default Income;