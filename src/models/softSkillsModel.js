const mongoose = require('mongoose');

const SoftSkillsSchema = mongoose.Schema({
    softSkill: {type: String, required: true},
    image: {type: String, required: true}
});

const softSkillsModel = mongoose.model('softSkills', SoftSkillsSchema);

module.exports = softSkillsModel;