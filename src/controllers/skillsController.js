const { Router } = require('express');
const { getSkills, postSkills, putSkills, deleteSkills } = require('../services/skillsService');

const router = Router();

router.get('/', async (req, res) => {
    let skillList = await getSkills()
    res.send(skillList)
});

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})


router.post('/create', async (req, res) => {
    const resposta = await postSkills(req.body)
    if(resposta === 201) res.status(resposta).send({msg: 'success'})
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