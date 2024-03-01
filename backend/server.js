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

app.use(cors())

app.get('/', (req , res) => {
    res.send("HELLO WORLD")
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})

