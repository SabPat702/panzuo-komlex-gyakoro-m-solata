const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    password: "",
    user: "root",
    host: "localhost",
    database: "komplex",
});

app.get("/k", (req, res) =>{
    const query = "Select * from tabla";
    db.query(query, (err, result) =>{
        if(err) return(res.json(err))
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("fut a szerver a 3001-es porton");
});