const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const PORT = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'crud',
    port: 8889
})

const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;

const insertTest = `
INSERT INTO users (username, email, password) VALUES ('riri', 'riadcdd@gmail.com', 'Ridock');

    `

db.connect((err) => {
    if(err){
        console.log("ntm")
        return;
    }
    db.query('CREATE DATABASE IF NOT EXISTS crud',(err,result) => {
        if(err){
            console.log("flop")
        }

    });
    db.query(createUsersTableQuery,(err,result) => {
        if(err){
            console.log("flop de la table")
        }
    })
    db.query(insertTest)
});

app.use(cors())

app.get('/', (req , res) => {
    res.send("HELLO WORLD")
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})

