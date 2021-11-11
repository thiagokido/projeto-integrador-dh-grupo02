const express = require('express');
const router = express.Router();
const { barbershopSearchListView } = require('../controllers/barbershopSearchListController')

/* GET BARBERSHOP SEARCH LIST PAGE */

router.get('/', barbershopSearchListView)

module.exports = router;