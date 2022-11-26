const { Router } = require('express');
const { getCertificate, createCertificate, updateCertificate, deleteCertificate } = require('../services/certificateService');

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getCertificate()
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.post('/create', async (req, res) => {
    resposta = await createCertificate(req.body);
    res.status(resposta).send({msg: 'success'})
})

router.put('/update', async (req, res) => {
    const resposta = await updateCertificate(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteCertificate(req.params.id);
    res.send(resposta);
})

module.exports = router