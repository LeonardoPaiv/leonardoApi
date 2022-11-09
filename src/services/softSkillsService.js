const softSkillsModel = require('../models/softSkillsModel');

const getSoftSkills = async () => {
    try {
        let listaSoftSkills = await softSkillsModel.find().then(dados => dados).catch(e => e);
        return listaSoftSkills
    } catch (e) {
        return e
    }
}

const createSoftSkill = async (dto) => {
    
    const doc = new softSkillsModel(dto);
    const err = doc.validateSync()
    console.log(err)
    if (err) return 400;
    else {
        const succesCreate = await softSkillsModel.create(dto).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateSoftSkill = async (id, update) => {
    let doc = await softSkillsModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteSoftSkill = async (id) => {
    softSkillsModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.getSoftSkills = getSoftSkills

exports.createSoftSkill = createSoftSkill

exports.updateSoftSkill = updateSoftSkill

exports.deleteSoftSkill = deleteSoftSkill