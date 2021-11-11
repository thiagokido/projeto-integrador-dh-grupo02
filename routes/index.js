var express = require('express');
var router = express.Router();
var { indexView } = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexView);

module.exports = router;
