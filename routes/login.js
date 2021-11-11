const express = require('express');
const router = express.Router();
const {loginView} = require('../controllers/loginController')

/* GET LOGIN PAGE */

router.get('/', loginView)

module.exports = router;