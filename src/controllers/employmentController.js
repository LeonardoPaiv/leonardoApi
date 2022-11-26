const { Router } = require('express');
const { createEmploymentHistory, readEmploymentHistorys, updateEmploymentHistory, deleteEmploymentHistory } = require('../services/employmentService');

const router = Router();

router.get('/', async (req, res) => {
    const resposta = await readEmploymentHistorys();
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.post('/create', async (req, res) => {
    const resposta = await createEmploymentHistory(req.body);
    res.status(resposta).send({msg: 'success'})
})

router.put('/update', async (req, res) => {
    const resposta = await updateEmploymentHistory(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteEmploymentHistory(req.params.id);
    res.send(resposta);
})

module.exports = router;