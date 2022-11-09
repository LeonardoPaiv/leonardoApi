const mongoose = require('mongoose');

const EmploymentSchema = mongoose.Schema({
    company: {type: String, required: true},
    local: {type: String, required: true},
    period: {type: String, required: true},
    metier: {type: String, required: true},
    description: {type: String, required: true},
});

const employmentModel = mongoose.model('employmentHistory', EmploymentSchema);

module.exports = employmentModel;