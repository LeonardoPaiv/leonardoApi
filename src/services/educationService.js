const educationModel = require('../models/educationModel');

const readEducation = async () => {
    try {
        const lista = await educationModel.find().then(res => res).catch(e => e);
        return lista;
    } catch (e) {
        console.log(e)
        return 400
    }
}

const createEducation = async (education) => {
    const doc = new educationModel(education);
    const err = doc.validateSync()
    if (err) {
        return 400
    } else {
        const succesCreate = await educationModel.create(education).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateEducation = async (id, update) => {
    let doc = await educationModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteEducation = async (id) => {
    educationModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.readEducation = readEducation;

exports.createEducation = createEducation;

exports.updateEducation = updateEducation;

exports.deleteEducation = deleteEducation;