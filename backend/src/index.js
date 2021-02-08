const { response } = require("express");
const express = require("express");
const pool = require("./db")

const app = express();
const port = 3001;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({
    extended: true
})); // Parse URL-encoded bodies

app.get("/", (req, res) => {
    res.json({
        info: "Postgres API for ecommerce application"
    })
})

app.post("/items", async (req, res) => {
    try {
        const { name } = req.body;
        const newItem = await pool.query(
            "INSERT INTO item (name) VALUES ($1) RETURNING *", [name]
        );

        res.json(newItem);
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/items", async (req, res) => {
    try { 
        const allItems = await pool.query("SELECT * FROM item");
        res.json(allItems.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.get("/items/:id", async (req, res) => {
    const { id } = req.params
    try {
        const item = await pool.query("SELECT * FROM item WHERE _id=$1", [id])
        res.json(item.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})