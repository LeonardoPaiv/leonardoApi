const mongoose = require('mongoose');

const CertificateSchema = mongoose.Schema({
    title: {type: String, required: true},
    time: {type: Number, required: true},
    description: {type: String, required: false},
});

const CertificateModel = mongoose.model('certificate', CertificateSchema);

module.exports = CertificateModel;