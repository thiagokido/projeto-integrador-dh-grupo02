const express = require('express');
const router = express.Router();
const { barbershopView, barbershopSchedule, barbershopSearchListView, barbershopDetails, barbershopRegistrationView, barbershopCreate } = require('../controllers/barbershopController')

/* GET BARBERSHOP PAGE */

router.get('/', barbershopView)

router.get('/barbershop-details/:id', barbershopDetails)

router.get('/search-list', barbershopSearchListView)

router.post('/schedule', barbershopSchedule)

router.get('/register', barbershopRegistrationView)

router.post('/register', barbershopCreate)

module.exports = router;