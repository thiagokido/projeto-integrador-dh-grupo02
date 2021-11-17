const express = require('express');
const router = express.Router();
const { barbershopRegistrationView, barbershopCreate } = require('../controllers/barbershopRegistrationController')

/* GET BARBERSHOP SEARCH LIST PAGE */

router.get('/', barbershopRegistrationView)

router.post('/register', barbershopCreate)

module.exports = router;