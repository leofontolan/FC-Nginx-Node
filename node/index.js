const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {

    res.send('<h1>Desafio Full Cycle | Nginx Node')
})

app.listen(port, ()=> {
    console.log ('Rodando ' + port)
})




const mysql = require('mysql');

const con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE people (id INT NOT NULL auto_increment, name VARCHAR(255), PRIMARY KEY(id) )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});