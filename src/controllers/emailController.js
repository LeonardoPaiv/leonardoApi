const { Router } = require('express');
const mailSend = require('../services/emailService')
const router = Router();


router.post('/', async (req, res) => {

    try {
        const email = await mailSend(req.body)
        res.send(email);
    } catch (e) {
        res.sendStatus(400)
    }
});

module.exports = router;