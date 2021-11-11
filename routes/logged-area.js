const express = require('express');
const router = express.Router();
const { loggedAreaView } = require('../controllers/loggedAreaController')

/* GET LOGGED AREA PAGE */

router.get('/', loggedAreaView)

module.exports = router;