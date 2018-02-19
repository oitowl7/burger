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
    update: (id, cb) => {
        orm.updateOne("burgers", id, res =>{
            cb(res);
        })
    }
}

module.exports = burger;