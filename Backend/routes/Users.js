const express = require("express");
const router = express.Router();
const {} = require("../models");

router.get("/", (req, res) => {
    res.json("Hello BLUD");
});

router.post("/", (req, res) => {
    const post = req.body;
})