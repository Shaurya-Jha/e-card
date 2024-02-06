const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    dateOfBirth: {
        type: Date
    }
}, {timestamps: true})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee