//import logo from '../images/logo.png';
import {withRouter} from 'react-router'
import React, { useState, useEffect } from "react";
import './income.css';

let count = 0

function Income(err, Result, Fields) {
  const [getTaxes, setTaxes] = useState([])

  //const baseURL = "https://tax.redhawks.us:2200/data";
  //const baseURL = "http://localhost:2200/data";
  const baseURL = "./tables.json"

  useEffect(() => {
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {setTaxes(data);}
      );
  }, []);


    let Minimums = []
      let Maximums = []
      let Head = []
      let Single = []
      let Seperate = []
      let Jointly = []

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  const taxed = getTaxes.map(function(data, idx) {
    return ([
        <p key={idx}>{data.Min}</p>,
        <p key={idx}>{data.Max}</p>,
        <p key={idx}>{data.Single}</p>,
        <p key={idx}>{data.MarriedJointly}</p>,
        <p key={idx}>{data.MarriedSeperately}</p>,
        <p key={idx}>{data.HeadHousehold}</p>,
        Minimums.push(data.Min),
        Maximums.push(data.Max),
        Head.push(data.HeadHousehold),
        Single.push(data.Single),
        Seperate.push(data.MarriedSeperately),
        Jointly.push(data.MarriedJointly)
    ]);
 });

  
  const [getIncome, setIncome] = useState('');  
  const [getStatus, setStatus] = useState('');  
  const [getTax, setTax] = useState('');

  function Tax(props){

     let x = 0
     let i = 0
     let inc = getIncome

     if(inc > 0){
     if(getStatus === "Head"){
      if(inc < 100000){
        while(inc >= Maximums[i])
        {
          i+=1
          x = Head[i]
        
        }
        
        changeBackgroundColor(Minimums[i], getStatus)
        if(i>6)
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i-3]
        else
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i]
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
        while(inc >= Maximums[i])
        {
          i+= 1
          x = Single[i]
        }
        changeBackgroundColor(Minimums[i], getStatus)
        setTax(x)
        if(i>6)
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i-3]
        else
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i]
          
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
        while(inc >= Maximums[i])
        {
          i+= 1
          x = Jointly[i]
        }
        changeBackgroundColor(Minimums[i],getStatus)
        if(i>6)
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i-3]
        else
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i]
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
        while(inc >= Maximums[i])
        {
          i+= 1
          x = Seperate[i]
        }
        changeBackgroundColor(Minimums[i], getStatus)
        if(i>6)
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i-3]
        else
          window.location = "https://tax.redhawks.us/" + "#tax" + Minimums[i]
          
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
  }
    
  }


    return (

        <div className="Income">
      
        <div className="Income-body">
            
            <StatusForm setStatus = {setStatus} setIncome = {setIncome}/>
            <br></br>
            <br></br>
            <Tax/>
            <p id="incomeStatement">Your tax amount is $<span>{getTax.toLocaleString()}</span></p>

        </div>
          <header className="Income-header">
            
          <div className = "Tax-brackets" tabIndex="0">
            <table> 
            <thead>
            <tr> 
              <th>Minimum Income</th>
              <th>Maximum Income</th>
              <th></th>
              <th>Single</th>
              <th>Married Filing Jointly</th>
              <th>Married Filing Seperately</th>
              <th>Head of Household</th>
            </tr>
            </thead>
            <tbody>
            {
              getTaxes.map((income, index) => (
              <tr key={index} id = {"tax" + income.Min}>
                <td> {numberWithCommas(income.Min)} </td>
                <td> {numberWithCommas(income.Max)} </td>
                <td> </td>
                <td> {numberWithCommas(income.Single)} </td>
                <td> {numberWithCommas(income.MarriedJointly)} </td>
                <td> {numberWithCommas(income.MarriedSeperately)} </td>
                <td> {numberWithCommas(income.HeadHousehold)} </td>
              </tr>
            ))}
            </tbody>
            </table> 
            </div>
          </header>
         
        </div>
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
          if(getI < 0){
            alert("BAD")
          }
          props.setIncome(getI)
          setS("")
          setI("")
      } 

      return (
        <form>
          <div>
          <label for="Annual Income"> What is your annual income?</label>
            <input value={getI} onChange={IValue}
              type="number"
              name="income"
              min="0"
              max="100000"
              step="500"
              required />
            <span class="validity"></span>
            <br></br>
            <br></br>
            <label for = "Household Status">What is your household status?</label>
          <select id = "Household_Status" value={getS} onChange={SValue}>
            <option id = "blank" value=""></option>
            <option id = "Single" value="Single">Single</option>
            <option id = "Married_Filing_Jointly" value="Jointly">Married Filing Jointly</option>
            <option id = "Married_Filing_Seperately" value="Separately">Married Filing Separately</option>
            <option id = "Head_of_Household" value="Head">Head of Household</option>
          
            
          </select>
          <button onClick={ButtonClick} id= "submit" type="submit" >Submit</button>
          </div>

        </form>
      )
  }

  let numbers = []
  let count2 = 0

  function changeBackgroundColor(number, status) {
    
    
    let color = "#FFBF00"
        
    var x = document.querySelector('table');
    x.querySelector("#tax"+number).style.backgroundColor = color;
    
    if (status == "Head")
      x.querySelector("#tax"+number+" td:nth-child(7)").style.backgroundColor = "red";
    else if (status == "Single")
      x.querySelector("#tax"+number+" td:nth-child(4)").style.backgroundColor = "red";
    else if (status == "Separately")
      x.querySelector("#tax"+number+" td:nth-child(6)").style.backgroundColor = "red";
    else if (status == "Jointly")
      x.querySelector("#tax"+number+" td:nth-child(5)").style.backgroundColor = "red";
    
    if(count2 > 1){  

        resetBackgroundColor(numbers[0])
    
      numbers.shift()
      //console.log(numbers)
      //console.log(count2)
      count2 = 1
      }

    count += 1
    if(count%4 == 0){
      if(numbers[0] != number){
        numbers.push(number)
        count2++
      }
    }

  
    //console.log("count = " + count)

  }

    function resetBackgroundColor(number){
      let color = "#28775d"

      var x = document.querySelector('table');
      x.querySelector("#tax"+number).style.backgroundColor = color;
      x.querySelector("#tax"+number+" td:nth-child(4)").style.backgroundColor = color;
      x.querySelector("#tax"+number+" td:nth-child(5)").style.backgroundColor = color;
      x.querySelector("#tax"+number+" td:nth-child(6)").style.backgroundColor = color;
      x.querySelector("#tax"+number+" td:nth-child(7)").style.backgroundColor = color;
    }

  export default Income;