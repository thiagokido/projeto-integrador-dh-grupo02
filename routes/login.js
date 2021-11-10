const express = require('express');
const router = express.Router();

/* GET LOGIN PAGE */

router.get('/',function(req,res) {
    res.render('login')
})

module.exports = router;