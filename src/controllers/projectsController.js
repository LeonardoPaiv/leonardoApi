const { Router } = require('express');
const { getProjects, createProjects, updateProjects, deleteProjects } = require('../services/projectService');

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getProjects()
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.put('/update', async (req, res) => {
    const { project, description, imagePath} = req.body;
    const resposta = await updateProjects(req.body.id, { project, description, imagePath});
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteProjects(req.params.id);
    res.send(resposta);
})

router.post('/create', async(req, res) => {
    const { project, description, imagePath} = req.body;
    resposta = await createProjects({project, description, imagePath});
    if (resposta === 201) res.status(201).send({msg: 'success'})
    else res.send({msg: 'error'})
})

module.exports = router