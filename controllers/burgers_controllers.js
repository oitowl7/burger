const express = require("express");
const router = express.Router();

const burger = require ("../models/burger.js");

router.get('/', (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

