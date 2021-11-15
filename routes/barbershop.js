const express = require('express');
const router = express.Router();
const { barbershopView, barbershopSchedule } = require('../controllers/barbershopController')

/* GET BARBERSHOP PAGE */

router.get('/', barbershopView)

router.post('/schedule', barbershopSchedule)

module.exports = router;