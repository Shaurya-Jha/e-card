const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName:{
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    dateOfBirth: {
        type: Date,
        default:""
    }
}, {timestamps: true})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee