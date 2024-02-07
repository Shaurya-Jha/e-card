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

    // if empExists
    if (empExists) {
      return res.status(400).json({
        message: "Employee already exists",
      });
    } else {
      // insert the new employee
      const newEmployee = new Employee({
        email: userEmail,
        password: userPassword,
      });

      await newEmployee.save();
      res.status(201).json({
        message: "Employee registered successfully",
        newEmployee,
      });
    }

    // if (empExists) {
    //   res.status(500).json({
    //     message: "employee exists",
    //   });
    // } else {
    //   const newEmployee = new Employee({
    //     email: userEmail,
    //     password: userPassword,
    //   });
    //   await newEmployee.save();
    //   res.status(200).json(newEmployee);
    // }
  } catch (error) {
    console.log(error);
  }
};

// controller for login
exports.loginEmployee = async (req, res) => {
    // get the email and password from the body
    const {userEmail , userPassword} = req.body

    // check if the user exists
    const empExists = await Employee.findOne({
        email: userEmail,
    })

    if(empExists){
        res.status(200).json({
            message: "user can login"
        })
    } else {
        res.status(400).json({
            message:"user does not exist"
        })
    }
}
