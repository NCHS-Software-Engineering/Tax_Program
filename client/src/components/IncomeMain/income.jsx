//import logo from '../images/logo.png';
import React, { useState, useEffect } from "react";
import './income.css';

function Income(err, Result, Fields) {
  const [getTaxes, setTaxes] = useState('')

  const baseURL = "http://localhost:8000/";

  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    console.log('getting Taxes')
    if (selected && selected.value){
      console.log(`getting movies for ${selected.value}`)
      fetch(`${baseURL}movies?branch=${selected.value}`)
      .then(response => response.json())
      .then(data => {
      console.log('Received data:', data); 
      setTaxes(data); 
      })
      .catch(error => console.error('Error fetching data', error));
    }

  }, [selected]);


  const [getIncome, setIncome] = useState('');  
  const [getStatus, setStatus] = useState(''); 
  const [getTax, setTax] = useState('');

  function Tax(props){
    
   

    /*getTaxes.map((Tax) => React.createElement('tr', {key: Tax, className: 'tax item'}, 
    React.createElement('td', {}, Tax.Min), 
    React.createElement('td', {}, Tax.Max), 
    React.createElement('td', {}, Tax.HeadHouseHold), 
    React.createElement('td', {}, Tax.Single), 
    React.createElement('td', {}, Tax.MarriedJointly), 
    React.createElement('td', {}, Tax.MarriedSeperatly), 
    ))*/

      props.setTax(getIncome)

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