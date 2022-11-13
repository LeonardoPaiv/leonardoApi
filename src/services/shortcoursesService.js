const shortCourseModel = require('../models/shortCourseModel');

const getShourtCourse = async () => {
    try {
        let listaShourtCourse = await shortCourseModel.find().then(dados => dados).catch(e => e);
        return listaShourtCourse
    } catch (e) {
        return e
    }
}

const createShortCourse = async (dto) => {
    
    const doc = new shortCourseModel(dto);
    const err = doc.validateSync()
    console.log(err)
    if (err) return 400;
    else {
        const succesCreate = await shortCourseModel.create(dto).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateShortCourse = async (id, update) => {
    let doc = await shortCourseModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteShortCourse = async (id) => {
    shortCourseModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.getShourtCourse = getShourtCourse

exports.createShortCourse = createShortCourse

exports.updateShortCourse = updateShortCourse

exports.deleteShortCourse = deleteShortCourse