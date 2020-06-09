const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    //Convert empty field to empty string to use validator
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Username check
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }

    //Password check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }

    return{
        errors, 
        isValid: isEmpty(errors)
    };
};