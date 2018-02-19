const express = require("express");
const router = express.Router();
const burger = require ("../models/burger.js");


router.get('/', (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured", "date"
    ],[
        req.body.name, req.body.date
    ], result => {
        res.json({id: result.insertID})
    })
})

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log("condition: " + condition);

    burger.update({
        id: req.body.id}, result => {
            if (result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
})

module.exports = router;