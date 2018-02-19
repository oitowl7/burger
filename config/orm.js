const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES ?";
        console.log(cols);
        connection.query(queryString, [table, cols.toString(), vals], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (table, id, cb) => {
        const queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [table, id], (err, result) =>{
            if (err) throw err;
            cb(result);
        })
    }
}
console.log("orm.js");
module.exports = orm;