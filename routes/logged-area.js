const express = require('express');
const router = express.Router();

/* GET LOGGED AREA PAGE */

router.get('/',function(req,res) {
    res.render('logged-area')
})

module.exports = router;