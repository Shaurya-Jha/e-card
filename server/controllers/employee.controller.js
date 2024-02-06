// controller for employee
const Employee = require("../models/employee.model.js")

// create a new object
exports.createEmployee = async (req, res) => {
    try{
        const newEmployee = new Employee(req.body)

        await newEmployee.save();
        res.status(201).json(newEmployee)
    }catch(error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}