const { Router } = require('express');
const { getSoftSkills, createSoftSkill } = require('../services/softSkillsService');

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getSoftSkills()
    res.send(resposta)
})

router.post('/create', async (req, res) => {
    resposta = await createSoftSkill(req.body);
    res.sendStatus(resposta)
})

module.exports = router