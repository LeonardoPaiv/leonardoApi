const { Router } = require('express');
const skillsModel = require('../models/skillsModel');
const { getSkills, postSkills, putSkills, deleteSkills } = require('../services/skillsService');

const router = Router();

router.get('/', async (req, res) => {
    let skillList = await getSkills()
    res.send(skillList)
});

router.post('/', async (req, res) => {
    const resposta = await postSkills(req.body)
    if(resposta === 201) res.sendStatus(resposta);
    else res.sendStatus(400)
});

router.put('/update', async (req, res) => {
    const resposta = await putSkills(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteSkills(req.params.id);
    res.send(resposta);
})

module.exports = router;