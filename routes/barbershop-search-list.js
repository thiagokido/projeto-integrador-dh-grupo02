const express = require('express');
const router = express.Router();

/* GET BARBERSHOP SEARCH LIST PAGE */

router.get('/',function(req,res) {
    res.render('barbershop-search-list')
})

module.exports = router;