const PgPool = require("pg").Pool

const pool = new PgPool({
    user: "postgres",
    host: "localhost",
    database: "item_database",
    password: "temporary123",
    port: 5432
})

module.exports = pool;