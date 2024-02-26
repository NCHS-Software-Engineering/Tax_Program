const express = require('express');
const cors = require('cors');

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


app.get('/', (req, res) => {
    res.json({message: "Hello from server!"})
    connection.query(sql, (err, data) => {
        if (err) return res.json(err);  
        return res.json(data); 
      })
})

app.listen(8000, () => {
    console.log(`Server running on port 8000.`)
})

