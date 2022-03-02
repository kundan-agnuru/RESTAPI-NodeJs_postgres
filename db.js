const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"postgres",
    password:"Kushal!007",
    port:5432
});

module.exports = pool;