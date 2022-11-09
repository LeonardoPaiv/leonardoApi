const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    description: {type: String, required: true},
});

const profileModel = mongoose.model('profile', profileSchema);

module.exports = profileModel;