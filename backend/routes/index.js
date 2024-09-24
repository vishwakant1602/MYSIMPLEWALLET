// backend/api/index.js
const express = require('express');
const userRouter = require("./user");

const router = express.Router();

// router.get("/user", (req,res)=> {

// })
router.use("/user", userRouter);

module.exports = router;