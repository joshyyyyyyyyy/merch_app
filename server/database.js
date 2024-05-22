const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "!bR-8eY3",
    host: "localhost",
    port: 5433
})

pool.query("CREATE DATABASE merch_app;").then((response) => {
    console.log("Database Created")
    console.log(response)
})
.catch((err) => {
    console.log(err)
})

module.exports = pool
