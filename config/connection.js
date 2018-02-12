const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

exports.directory = [
    {
        connection: () => {
            const connection = mysql.createConnection({
                host: "localhost",
                port: 3306,
                user: "root",
                password: "password",
                database: "burgers_db"
            })
        }
    }
]