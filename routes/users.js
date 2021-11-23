var express = require('express');
var router = express.Router();
const { loginView, loginValidation, loggedCustomer, signupView, signupCreate } = require('../controllers/usersController')

router.get('/login', loginView)

router.post('/login', loginValidation)

router.get('/customer/:id', loggedCustomer)

router.get('/signup', signupView)

router.post('/register', signupCreate)

module.exports = router;
