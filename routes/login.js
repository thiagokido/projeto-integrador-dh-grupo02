const express = require('express');
const router = express.Router();
const {loginView,loginUser} = require('../controllers/loginController')

/* GET LOGIN PAGE */

router.get('/', loginView)

router.post('/enter', loginUser)

module.exports = router;