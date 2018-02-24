const orm = require("../config/orm.js");

let burger = {
    all: cb =>  {
        orm.selectAll("burgers", res =>{
            cb(res);
        })
    },
    create: (cols, vals, cb) =>{
        orm.insertOne("burgers", cols, vals, res =>{
            cb(res);
        })
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    },
    delete : function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;