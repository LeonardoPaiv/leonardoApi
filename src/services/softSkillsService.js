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
    if (err) return 400;
    else {
        const succesCreate = await softSkillsModel.create(dto).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

exports.getSoftSkills = getSoftSkills

exports.createSoftSkill = createSoftSkill