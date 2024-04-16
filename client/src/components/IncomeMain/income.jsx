//import logo from '../images/logo.png';
import React, { useState, useEffect } from "react";
import './income.css';

function Income(err, Result, Fields) {

  const [getTaxes, setTaxes] = useState([])

  const baseURL = "http://10.7.22.1:8000";

  useEffect(() => {
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {setTaxes(data);}
      );
  }, []);



  
  const [getIncome, setIncome] = useState('');  
  const [getStatus, setStatus] = useState('');  
  const [getTax, setTax] = useState('');

  function Tax(props){

/*    let Map = getTaxes.map((item) => ({Min, Max, H, S, MS, MJ}

        /*(income.Min)
        (income.Max)
        (income.HeadHousehold) 
        (income.Single)
        (income.MarriedSeperately)
        (income.MarriedJointly
    
        )
      
      )
*/
      
      

    //alert(getTaxes)

    /*const taxes = getTaxes.map((Tax, index) => ({key: index}
      (Tax.Min),
      (Tax.Max),
      (Tax.HeadHouseHold),
      (Tax.Single),
      (Tax.MarriedJointly),
      (Tax.MarriedSeperatly)
      ))*/

      let Minimums = []
      let Maximums = []
      let Head = []
      let Single = []
      let Seperate = []
      let Jointly = []

      const taxed = getTaxes.map(function(data, idx) {
        return ([
            <p key={idx}>{data.Min}</p>,
            <p key={idx}>{data.Max}</p>,
            <p key={idx}>{data.HeadHousehold}</p>,
            <p key={idx}>{data.Single}</p>,
            <p key={idx}>{data.MarriedSeperately}</p>,
            <p key={idx}>{data.MarriedJointly}</p>,
            Minimums.push(data.Min),
            Maximums.push(data.Max),
            Head.push(data.HeadHousehold),
            Single.push(data.Single),
            Seperate.push(data.MarriedSeperately),
            Jointly.push(data.MarriedJointly)
        ]);
     });

    /* const H = []
     let i = 0
     let j = 2
     alert(taxed.size)
     for(i = 0; i < taxed.size; i++){
        let x = taxed[i]
        for(j = 2; j<6; j++){
          H.push(x)
        }

     }*/

     let x = 0
     let i = 0
     let inc = getIncome

     if(getStatus === "Head"){
      if(inc < 100000){
        while(inc > Maximums[i])
        {
          i+= 1
          x = Head[i]
        }
          setTax(x)

        }
      else if(inc < 182100){
        setTax(inc*.24 -8206)
      }
      else if(inc <231250){
        setTax(inc*.32 -22774)
      }
      else if(inc < 578100){
        setTax(inc*.35 -29711.5)
      }
      else{
        setTax(inc*.37 - 41273.5)
      }
     }
    else if(getStatus === "Single"){
      if(inc < 100000){
        while(inc > Maximums[i])
        {
          i+= 1
          x = Single[i]
        }
          setTax(x)
      }
          else if(inc < 182100){
            setTax(inc*.24 -6600)
          }
          else if(inc <231250){
            setTax(inc*.32 -21168)
          }
          else if(inc < 578125){
            setTax(inc*.35 -28105.5)
          }
          else{
            setTax(inc*.37 - 39668)
          }
        
    }
    else if(getStatus === "Jointly"){
      if(inc < 100000){
        while(inc > Maximums[i])
        {
          i+= 1
          x = Jointly[i]
        }
          setTax(x)
      }
          else if(inc < 190750){
            setTax(inc*.22 -9385)
          }
          else if(inc <364200){
            setTax(inc*.24 -13200)
          }
          else if(inc < 462500){
            setTax(inc*.32 -42336)
          }
          else if(inc < 693750){
            setTax(inc*.35 -56211)
          }
          else{
            setTax(inc*.37 - 70086)
          }
    }
    else if(getStatus === "Separately"){
      if(inc < 100000){
        while(inc > Maximums[i])
        {
          i+= 1
          x = Seperate[i]
        }
          setTax(x)
      }
          else if(inc < 182100){
            setTax(inc*.24 -6600)
          }
          else if(inc <231250){
            setTax(inc*.32 -21168)
          }
          else if(inc < 346875){
            setTax(inc*.35 -28105.50)
          }
          else{
            setTax(inc*.37 - 35043)
          }
    }
      
   // alert(x)
    /*
    getTaxes.map((Tax) => React.createElement({key: Tax, className: 'tax item'}, 
    React.createElement( {}, Tax.Min), 
    React.createElement( {}, Tax.Max), 
    React.createElement( {}, Tax.HeadHouseHold), 
    React.createElement( {}, Tax.Single), 
    React.createElement( {}, Tax.MarriedJointly), 
    React.createElement( {}, Tax.MarriedSeperatly), 
    ))*/

      //props.setTax(taxes.get(25))
     
  }


    return (

      <body>
        <div className="App">
          <header className="App-header">
        
          </header>
          <body className="App-body">
              <StatusForm setStatus = {setStatus} setIncome = {setIncome}/>
              <Tax getTaxes = {getTaxes}/>
              <p1>Your tax amount is {getTax}$</p1>
          </body>
        </div>
      </body>
    );
  }

  function StatusForm(props){
    const[getS, setS] = useState()
    const SValue = (e) => setS(e.target.value);

    const[getI, setI] = useState()
    const IValue = (e) => setI(e.target.value);

      function ButtonClick(e){
          e.preventDefault()
          props.setStatus(getS)
          props.setIncome(getI)
          setS("")
          setI("")
      } 

      return (
        <form>
          <div>
          <label> What is your annual income (0-100k):</label>
            <input value={getI} onChange={IValue}
              type="number"
              name="income"
              min="0"
              max="100000"
              required />
            <span class="validity"></span>
            <label>What is your household status?</label>
          <select value={getS} onChange={SValue}>
            <option value=""> </option>
            <option value="Single">Single</option>
            <option value="Jointly">Married filing jointly</option>
            <option value="Separately">Married filing separately</option>
            <option value="Head">Head of Household</option>
          </select>
          <button onClick={ButtonClick} id= "submit" type="submit" >Submit</button>
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