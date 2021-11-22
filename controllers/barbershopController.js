const moment = require('moment')

function barbershopView (req, res) {
    res.render('barbershop')
}

function barbershopSearchListView (req, res) {
    res.render('barbershop-search-list')
}

function barbershopSchedule (req, res) {
    const schedule = {
        service: req.body.scheduleService,
        datetime: moment(req.body.scheduleDate + ' ' + req.body.scheduleTime).format('YYYY-MM-DD HH:mm:ss'),
        createdAt: new Date()
    }
    res.redirect('/login/customer/1')
}

module.exports = {
    barbershopView,
    barbershopSearchListView,
    barbershopSchedule
}