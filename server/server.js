const express = require('express');
const cors = require('cors');
const csvtojson = require('csvtojson'); 
const dotenv = require("dotenv");
var path    = require("path");

dotenv.config({ path: ".env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


/*const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER, 
  password: process.env.PASS,
  database: process.env.DB
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
connection.connect(function(err) {
  if (err) throw err;
  connection.query('SELECT Min, Max, HeadHousehold, Single, MarriedSeperately, MarriedJointly FROM Tax', function Income(err, result, Fields)
  {
    if (err) throw err;
    console.log(result);
  })
})
 
}); 

*/



app.get('/data', (req, res) => {
    const sql = 'SELECT Min, Max, HeadHousehold, Single, MarriedSeperately, MarriedJointly FROM Tax'; 
    connection.query(sql, (err, data) => { 
      if (err) 
        return res.json(err);
      return res.json(data);
      })
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(process.env.PORT, () => {
    console.log(`Server running on port `+process.env.PORT)
})

/*https://www.irs.gov/pub/irs-prior/i1040tt--2023.pdf*/