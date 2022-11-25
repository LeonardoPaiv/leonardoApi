const { Router } = require('express');
const router = Router();
const passport = require('passport')

const { registerUser } = require('../services/authService')


router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send({login: 'success'})
})

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    if (username && password) {
        const resposta = await registerUser(username, password);
        res.status(resposta.status).send(resposta.msg);
    } else res.sendStatus(400)
});


router.get('/authenticated', (req, res, ) => {
    if (req.user) res.send(true);
    else res.send(false)
})


module.exports = router;