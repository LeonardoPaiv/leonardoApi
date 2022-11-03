const { Router } = require('express');
const skillsModel = require('../models/skillsModel');

const router = Router();

router.get('/', (req, res) => {
    skillsModel.find()
    .then(dados => res.send(dados))
    .catch(e => res.sendStatus(e))
});

router.post('/', (req, res) => {
    console.log(req.body);
    skillsModel.create(req.body)
    .then(dados => {
        console.log(dados);
        res.sendStatus(201);
    })
    .catch(() => res.sendStatus(400))
});

module.exports = router;