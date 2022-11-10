const authModel = require('../models/authModel');

const { hashPassword, comparePassword } = require('../utils/helpers');

const login = async (username, password) => {
    const userBd = await authModel.findOne({username});
    if(!userBd) return {status: 401};

    const isValid = comparePassword(password, userBd.password);
    if (isValid) {
        return {status: 200}
    } else {
        return {status: 401}
    }
}

const registerUser = async (username, password) => {
    const userBd = await authModel.find({username})
    if (userBd.length > 0) {
        return {status: 400, msg: 'the user alredy exists'};
    } else {
        const cryptPass = hashPassword(password);
        const user = await authModel.create({username, password: cryptPass});
        return {status: 201, msg: ''};
    }
}



exports.registerUser = registerUser;

exports.login = login;