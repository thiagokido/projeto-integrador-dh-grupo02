var express = require('express');
var router = express.Router();
// const { loginView, signupView, createCustomer, updateCustomer, findCustomer, findCustomerById } = require('../controllers/usersController')

const { loginView, signupView, createCustomer, updateCustomer, findCustomer, findCustomerById, findUserSchedules, checkEmail } = require('../controllers/usersController')

router.get('/login', loginView)

router.post('/login', findCustomer)

router.get('/:id', findCustomerById)

router.get('/signup', signupView)

router.post('/check', checkEmail)

router.post('/create', createCustomer)

router.post('/:id', updateCustomer)

router.get('/:id/schedules', findUserSchedules)


module.exports = router;
