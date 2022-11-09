const skillsModel = require('../models/skillsModel');

const getSkills = async () => {
    try {
        let lista = await skillsModel.find().then(dados => dados).catch(e => e);
        return lista
    } catch (e) {
        return e
    }
}

const postSkills = async (skill) => {
    const resposta = await skillsModel.create(skill).then(() => 201).catch(e => e);
    return resposta
}

const putSkills = async (id, update) => {
    let doc = await skillsModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteSkills = async (id) => {
    skillsModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.getSkills = getSkills;

exports.postSkills = postSkills;

exports.putSkills = putSkills;

exports.deleteSkills = deleteSkills;