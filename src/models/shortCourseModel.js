const mongoose = require('mongoose');

const ShortCourseSchema = mongoose.Schema({
    title: {type: String, required: true},
    time: {type: Number, required: true},
    description: {type: String, required: false},
});

const shortCourseModel = mongoose.model('shortcourse', ShortCourseSchema);

module.exports = shortCourseModel;