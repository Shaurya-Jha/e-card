const express = require("express");
const { createEmployee } = require("../controllers/employee.controller.js");
const router = express.Router();

// employee router

// route to get all employee info
router.get("/employee", (req, res) => {
  res.send("get methid for all employees").status(200)
});

// route to create new employee
router.post("/employee", createEmployee);

module.exports = router;
