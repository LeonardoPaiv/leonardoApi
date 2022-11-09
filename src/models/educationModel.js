const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    company: {type: String, required: true},
    local: {type: String, required: true},
    period: {type: String, required: true},
    degree: {type: String, required: true},
    description: {type: String, required: true},
});

const educationModel = mongoose.model('education', educationSchema);

module.exports = educationModel;