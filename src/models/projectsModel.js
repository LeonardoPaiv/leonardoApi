const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    router: {type: String, required: true},
    path: {type: String, required: false}
});

const projectModel = mongoose.model('projects', ProjectSchema);

module.exports = projectModel;