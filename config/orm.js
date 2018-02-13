const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            return result;
        })
    },
    insertOne: (table, schema, values, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES ?";
        connection.query(queryString, [table, schema, values], (err, result) => {
            if (err) throw err;
            return result;
        })
    },
    updateOne: (table, id, cb) => {
        const queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [table, id], (err, result) =>{
            if (err) throw err;
            return result;
        })
    }
}
console.log("orm.js");
module.exports = orm;