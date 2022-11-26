const { Router } = require('express');
const { getSoftSkills, createSoftSkill, updateSoftSkill, deleteSoftSkill } = require('../services/softSkillsService');

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getSoftSkills()
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.post('/create', async (req, res) => {
    resposta = await createSoftSkill(req.body);
    res.status(resposta).send({msg: 'success'})
})



router.put('/update', async (req, res) => {
    const resposta = await updateSoftSkill(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteSoftSkill(req.params.id);
    res.send(resposta);
})

module.exports = router