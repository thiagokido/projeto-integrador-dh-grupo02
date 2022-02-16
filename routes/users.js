var express = require('express');
var router = express.Router();
const { loginView, loggedCustomer, signupView, createCustomer, updateCustomer, findCustomer } = require('../controllers/usersController')

router.get('/login', loginView)

router.post('/login', findCustomer)

// router.post('/login', loginValidation)

router.get('/customer/:id', loggedCustomer)

router.get('/signup', signupView)

// router.post('/register', signupCreate)

// router.get('/', index)

router.post('/create', createCustomer)

router.put('/update/:id', updateCustomer)


module.exports = router;
