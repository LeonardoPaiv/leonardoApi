const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    project: {type: String, required: true},
    description: {type: String, required: true},
    imagePath: {type: String, required: false}
});

const projectModel = mongoose.model('projects', ProjectSchema);

module.exports = projectModel;