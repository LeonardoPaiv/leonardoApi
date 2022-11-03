const mongoose = require('mongoose');

const SkillsSchema = mongoose.Schema({
    skill: {type: String, required: true},
    image: {type: String, required: true}
});

const skillsModel = mongoose.model('skills', SkillsSchema);

module.exports = skillsModel;