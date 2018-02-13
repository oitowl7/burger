const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})
connection.connect(err => {
    if (err) {
        console.error("error connectiing: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})
console.log("connection.js");
module.exports = connection;