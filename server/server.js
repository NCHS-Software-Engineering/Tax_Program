const express = require('express');
const cors = require('cors');
const csvtojson = require('csvtojson'); 

const app = express();
app.use(cors());
app.use(express.json());


const mysql = require('mysql2'); 
const connection = mysql.createConnection({
  host: 'db.redhawks.us',
  user: 'redhawks_tax', 
  password: 'd2FPT24980y0',
  database: 'redhawks_tax'
});
connection.connect((err) => 
{
  if (err) {
    console.log("Error connecting to the database", err);
  }else {
    console.log("Connected to the database!");
  }

})

/*
const fileName = "tax.csv"; 

csvtojson().fromFile(fileName).then(source => {
  
  console.log("1");
  for (var i = 0; i < source.length; i++) {
    console.log(source[i])
    var Min = source[i]["Min"], 
        Max = source[i]["Max"], 
        HeadHousehold = source[i]["HeadHousehold"], 
        Single = source[i]["Single"],
        MarriedSeperately = source[i]["MarriedSeperately"],
        MarriedJointly = source[i]["MarriedJointly"]

        
    console.log(2);
    var insertStatement = 
    `INSERT INTO Tax values(?,?,?,?,?,?)`; 
    var items = [Min, Max, HeadHousehold, Single, MarriedSeperately, MarriedJointly]; 

    if (items === null) {
      console.log('value is null'); 
    }
    else { connection.query(insertStatement, items, 
      (err, results, fields) => {
        if (err) {
          console.log(
            "Unable to insert item at row ", i+1); 
              return console.log(err); 
        }
      }); }
   
  }
  console.log(
    "All items stored into database successfully");
 
}); 

*/
app.get('/', (req, res) => {
    const sql = 'SELECT Min, Max, HeadHousehold, Single, MarriedSeperately, MarriedJointly FROM Tax'; 
    connection.query(sql, (err, data) => {
        if (err) return res.json(err);  
        return res.json(data); 
      })
})

app.listen(8000, () => {
    console.log(`Server running on port 8000.`)
})

/*https://www.irs.gov/pub/irs-prior/i1040tt--2023.pdf*/