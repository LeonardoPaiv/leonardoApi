const { Router } = require('express');
const { createProfile, readProfile, updateProfile, deleteProfile } = require('../services/profileService');

const router = Router();

router.get('/', async (req, res) => {
    const resposta = await readProfile();
    res.send(resposta)
})

router.use((req, res, next) => {
    if (req.user) next();
    else res.sendStatus(401)
})

router.post('/create', async (req, res) => {
    const resposta = await createProfile(req.body);
    res.sendStatus(resposta);
})

router.put('/update', async (req, res) => {
    const resposta = await updateProfile(req.body.id, req.body);
    res.send(resposta)
});

router.delete('/delete/:id', async (req, res) => {
    const resposta = await deleteProfile(req.params.id);
    res.send(resposta);
})


module.exports = router;