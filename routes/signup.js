const express = require('express');
const router = express.Router();
const { signupView, signupCreate } = require('../controllers/signupController')

/* GET SIGN UP PAGE */

router.get('/', signupView)

router.post('/cadastrar', signupCreate)

module.exports = router;