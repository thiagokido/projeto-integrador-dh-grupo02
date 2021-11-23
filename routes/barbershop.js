const express = require('express');
const router = express.Router();
const { barbershopView, barbershopSchedule, barbershopSearchListView, barbershopDetails } = require('../controllers/barbershopController')

/* GET BARBERSHOP PAGE */

router.get('/', barbershopView)

router.get('/barbershop-details/:id', barbershopDetails)

router.get('/search-list', barbershopSearchListView)

router.post('/schedule', barbershopSchedule)

module.exports = router;