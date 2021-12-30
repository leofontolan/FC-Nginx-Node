//----------------------------------------------------------> Criar Rota Express
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', function(req, res, next) {

    var sql="SELECT * FROM people where id= '1'";
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'Full Cicly', message: 'Desafio Full Cycle | Nginx + NodeJs + MySQL',userName:  Object.values(JSON.parse(JSON.stringify(data)))[0].name } );
  });

});

app.listen(port, () => {
    console.log('Rodando ' + port)
})



//----------------------------------------------------------> Conectar MySQL
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

//----------------------------------------------------------> CRUD

connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");

    const sql = "CREATE TABLE IF NOT EXISTS people (id INT NOT NULL auto_increment, name VARCHAR(255), PRIMARY KEY(id) )";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tabela Criada");
    });


    connection.query(`INSERT INTO people(name) values('Leo Fontolan')`, (err, res) => {
        if(err) throw err;
        console.log('OK INSERT');
      });

    //   connection.query(`SELECT * FROM people where id= '1'`, (err, rows) => {
    //     if(err) throw err;
    //     console.log(   Object.values(JSON.parse(JSON.stringify(rows)))[0].name    );
    //   });
});

