const profileModel = require('../models/profileModel');

const readProfile = async () => {
    try {
        const lista = await profileModel.find().then(res => res).catch(e => e);
        return lista;
    } catch (e) {
        console.log(e)
        return 400
    }
}

const createProfile = async (profile) => {
    const doc = new profileModel(profile);
    const err = doc.validateSync()
    if (err) {
        return 400
    } else {
        const succesCreate = await profileModel.create(profile).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateProfile = async (id, update) => {
    let doc = await profileModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteProfile = async (id) => {
    profileModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.readProfile = readProfile;

exports.createProfile = createProfile;

exports.updateProfile = updateProfile;

exports.deleteProfile = deleteProfile;