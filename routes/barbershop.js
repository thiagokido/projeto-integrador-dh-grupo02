const express = require('express');
const router = express.Router();
const { barbershopView } = require('../controllers/barbershopController')

/* GET BARBERSHOP PAGE */

router.get('/', barbershopView)

module.exports = router;