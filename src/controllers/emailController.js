const { Router } = require('express');
const mailSend = require('../services/emailService')
const router = Router();


router.post('/', (req, res) => {
    const email = mailSend(req.body)
    if (email) res.sendStatus(201);
    else res.sendStatus(400)
});



module.exports = router;