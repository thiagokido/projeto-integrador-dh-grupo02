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

const barbershops = [
    {
        id: 1,
        name: "barbearia do josé",
        endereço: "rua do josé 01"
    },
    {
        id:2,
        name: "barbearia do joão",
        endereço: "rua do joão 02"
    }

]

function barbershopDetails (req, res) {
    const barbershopId = req.params.id
    const barbershop = barbershops.filter( (i) => i.id == barbershopId )
    res.send( barbershop )
}

module.exports = {
    barbershopView,
    barbershopDetails,
    barbershopSearchListView,
    barbershopSchedule
}