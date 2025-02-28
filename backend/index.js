const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "",
    database: "fogado",
});

app.get("/szobak", (req, res) => {
    const query = "Select sznev, agy from szobak";
    db.query(query, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.get("/szobakNeve", (req, res) => {
    const query = "Select szazon, sznev from szobak";
    db.query(query, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.get("/szobakKihasznaltsaga", (req, res) => {
    const query = "Select szobak.sznev, Sum(foglalasok.fo) As fo, Sum((foglalasok.tav-foglalasok.erk)*foglalasok.fo) As este from szobak inner join foglalasok on foglalasok.szoba = szobak.szazon Group by szobak.sznev";
    db.query(query, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.get("/valasztottSzoba/:id", (req, res) => {
    const query = "Select vendegek.vnev, foglalasok.erk, foglalasok.tav from szobak inner join foglalasok on foglalasok.szoba = szobak.szazon inner join vendegek on vendegek.vsorsz = foglalasok.vendeg where szobak.szazon = ?";
    db.query(query, [req.params.id], (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("Fut a szerver a 3001-es porton.");
})