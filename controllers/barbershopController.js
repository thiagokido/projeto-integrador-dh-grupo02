const moment = require('moment')

function barbershopView (req, res) {
    res.render('barbershop')
}

function barbershopSchedule (req, res) {
    const schedule = {
        service: req.body.scheduleService,
        datetime: moment(req.body.scheduleDate + ' ' + req.body.scheduleTime).format('YYYY-MM-DD HH:mm:ss'),
        createdAt: new Date()
    }
    res.redirect('/logged-area')
}

module.exports = {
    barbershopView,
    barbershopSchedule
}