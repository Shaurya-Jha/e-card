const express = require("express");
const { createEmployee, signupEmployee, loginEmployee, getAllEmployees } = require("../controllers/employee.controller.js");
const router = express.Router();

// employee router

// route to get all employee info
router.get("/getEmployees", getAllEmployees);

// route to create new employee
// router.post("/employee", createEmployee);

// route to signup an employee
router.post("/signup", signupEmployee)

// route to check if employee exists
router.get("/login/:id", loginEmployee)

module.exports = router;
