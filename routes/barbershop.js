const express = require('express');
const router = express.Router();

/* GET BARBERSHOP PAGE */

router.get('/',function(req,res) {
    res.render('barbershop')
})

module.exports = router;