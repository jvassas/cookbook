const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Empty fields to string for validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Email check
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password required";
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};