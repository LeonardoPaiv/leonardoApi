const projectModel = require('../models/projectsModel');

const getProjects = async () => {
    try {
        let listaProjects = await projectModel.find().then(dados => dados).catch(e => e);
        return listaProjects
    } catch (e) {
        return e
    }
}

const createProjects = async (dto) => {
    
    const doc = new projectModel(dto);
    const err = doc.validateSync()
    if (err) return 400;
    else {
        const succesCreate = await projectModel.create(dto).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateProjects = async (id, update) => {
    let doc = await projectModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteProjects = async (id) => {
    projectModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.getProjects = getProjects

exports.createProjects = createProjects

exports.updateProjects = updateProjects

exports.deleteProjects = deleteProjects