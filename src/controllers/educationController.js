const { Router } = require('express');
const { createEducation, readEducation, updateEducation, deleteEducation } = require('../services/educationService');

const router = Router();

router.get('/', async (req, res) => {
    const resposta = await readEducation();
    res.send(resposta)
})

router.post('/create', async (req, res) => {
    const resposta = await createEducation(req.body);
    res.sendStatus(resposta);
})

router.put('/update', async (req, res) => {
    const resposta = await updateEducation(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteEducation(req.params.id);
    res.send(resposta);
})


module.exports = router;