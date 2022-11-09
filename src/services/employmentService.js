const employmentModel = require('../models/employmentModel');

const readEmploymentHistorys = async () => {
    try {
        const lista = await employmentModel.find().then(res => res).catch(e => e);
        return lista;
    } catch (e) {
        console.log(e);
        return 400
    }
}

const createEmploymentHistory = async (employment) => {
    const doc = new employmentModel(employment);
    const err = doc.validateSync()
    if (err) {
        return 400
    } else {
        const succesCreate = await employmentModel.create(employment).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}


const updateEmploymentHistory = async (id, update) => {
    let doc = await employmentModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteEmploymentHistory = async (id) => {
    employmentModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.readEmploymentHistorys = readEmploymentHistorys;

exports.createEmploymentHistory = createEmploymentHistory;

exports.updateEmploymentHistory = updateEmploymentHistory

exports.deleteEmploymentHistory = deleteEmploymentHistory