const bcrypt = require('bcryptjs');

function hashPassword(password) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}

function comparePassword(raw, hash) {
    return bcrypt.compareSync(raw, hash);
}

exports.hashPassword = hashPassword;

exports.comparePassword = comparePassword;