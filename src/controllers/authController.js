const { Router } = require('express');
const router = Router();

const { login, registerUser } = require('../services/authService')


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.sendStatus(400);
    else {
        const resposta = await login(username, password);
        res.sendStatus(resposta.status);
    }
});

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    if (username && password) {
        const resposta = await registerUser(username, password);
        res.status(resposta.status).send(resposta.msg);
    } else res.sendStatus(400)
});

module.exports = router;