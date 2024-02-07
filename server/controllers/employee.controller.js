// controller for employee
const Employee = require("../models/employee.model.js");

// get all employess from the database
exports.getAllEmployees = async (req, res) => {
  try {
    // find all the employees from the database
    const employees = await Employee.find({});

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
  }
};

// controller to signup an employee
exports.signupEmployee = async (req, res) => {
  try {
    // all signup related process will be handled here

    // destructuring to get the required fields
    const { userEmail, userPassword } = req.body;

    // check if the user exists or not
    const empExists = await Employee.findOne({ email: userEmail });

    if (empExists) {
      res.status(400).json({
        message: "employee exists",
      });
    } else {
      const newEmployee = new Employee({
        email: userEmail,
        password: userPassword,
      });
      await newEmployee.save();
      res.status(201).json(newEmployee);
    }
  } catch (error) {
    console.log(error);
  }
};

// controller to get employee by id and login
exports.loginEmployee = async (req, res) => {
  try {
    // login and employee exists will be checked here
    const { id } = req.params.id;

    const employeeExists = await Employee.find({ _id: id });

    if (!employeeExists) {
      return res.status(400).json({
        message: "Employee doesn't exists",
      });
    }
    res.status(200).json("employee exists ");
  } catch (error) {
    console.log(error);
  }
};
