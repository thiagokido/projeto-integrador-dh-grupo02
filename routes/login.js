const express = require('express');
const router = express.Router();
const { loginView, loginValidation, loggedCustomer } = require('../controllers/loginController')

/* GET LOGIN PAGE */

router.get('/', loginView)

router.post('/enter', loginValidation)

router.get('/customer/:id', loggedCustomer)

module.exports = router;