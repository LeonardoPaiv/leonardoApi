const { Router } = require('express');
const { getProjects, createProjects, updateProjects, deleteProjects } = require('../services/projectService');

const multer = require('../middlewares/multer')

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getProjects()
    res.send(resposta)
})

router.put('/update', async (req, res) => {
    const resposta = await updateProjects(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteProjects(req.params.id);
    res.send(resposta);
})

router.post('/create', multer.single('image'), async(req, res) => {
    const { title, description, router} = req.body;
    const { path } = req.file;
    resposta = await createProjects({title, description, router, path});
    res.sendStatus(resposta)
})

module.exports = router