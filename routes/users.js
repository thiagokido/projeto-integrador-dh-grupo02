var express = require('express');
var router = express.Router();
const { loginView, signupView, createCustomer, updateCustomer, findCustomer, findCustomerById } = require('../controllers/usersController')

router.get('/login', loginView)

router.post('/login', findCustomer)

 router.post('customer/:id', findCustomerById)

router.get('/signup', signupView)

router.post('/create', createCustomer)

router.put('/update/:id', updateCustomer)

module.exports = router;
