const { Router } = require('express');
const { getShourtCourse, createShortCourse, updateShortCourse, deleteShortCourse } = require('../services/shortcoursesService');

const router = Router();

router.get('/', async (req, res) => {
    resposta = await getShourtCourse()
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.post('/create', async (req, res) => {
    resposta = await createShortCourse(req.body);
    res.status(resposta).send({msg: 'success'})
})

router.put('/update', async (req, res) => {
    const resposta = await updateShortCourse(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteShortCourse(req.params.id);
    res.send(resposta);
})

module.exports = router