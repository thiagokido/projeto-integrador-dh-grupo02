const express = require('express');
const router = express.Router();
const { signupView } = require('../controllers/signupController')

/* GET SIGN UP PAGE */

router.get('/', signupView)

module.exports = router;