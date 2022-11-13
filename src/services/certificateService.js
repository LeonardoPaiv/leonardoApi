const CertificateModel = require('../models/certificateModel');

const getCertificate = async () => {
    try {
        let listaCertificate = await CertificateModel.find().then(dados => dados).catch(e => e);
        return listaCertificate
    } catch (e) {
        return e
    }
}

const createCertificate = async (dto) => {
    
    const doc = new CertificateModel(dto);
    const err = doc.validateSync()
    console.log(err)
    if (err) return 400;
    else {
        const succesCreate = await CertificateModel.create(dto).then(() => 201).catch(e => {
            console.log(e);
            return 400
        });
        return succesCreate;
    }
}

const updateCertificate = async (id, update) => {
    let doc = await CertificateModel.findByIdAndUpdate(id, update);
    return doc;
}

const deleteCertificate = async (id) => {
    CertificateModel.findByIdAndDelete(id, (err, objeto) => {
        if (err) resposta = err;
        else resposta = `deleted: ${objeto}`;
    });
    return;
}

exports.getCertificate = getCertificate

exports.createCertificate = createCertificate

exports.updateCertificate = updateCertificate

exports.deleteCertificate = deleteCertificate