const mysql = require("mysql");

let connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    })
}

connection.connect(err => {
    if (err) {
        console.error("error connectiing: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;

//this note means nothing. I need it for a push change