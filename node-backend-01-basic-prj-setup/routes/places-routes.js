const express = require('express');

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("GET Request in places")
    res.json({
        status: "success",
        message: "Welcome to the API!"
    })
})

module.exports = router;
