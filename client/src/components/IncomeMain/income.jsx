//import logo from '../images/logo.png';
import React, { useState } from "react";
import './income.css';
import {
  InputContainer,
  Input,
  InputHighlighter,
  Heading,
} from "./incomeStyles";


function Income() {
  const [getIncome, setIncome] = useState('');  
  const [getStatus, setStatus] = useState(''); 
  const [getTax, setTax] = useState('');

  function Tax(props){
    /*
    if(getStatus === "Head" && getIncome < 15700)
      props.setTax((getIncome/9.97506234414)-getIncome/9.97506234414%1)
    else
      props.setTax(getIncome)
    */
   /*
   useEffect(() => {
    if (getStatus){
      fetch(``)
    }
   })*/

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
              <p4>Your tax amount is ${getTax}</p4>
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