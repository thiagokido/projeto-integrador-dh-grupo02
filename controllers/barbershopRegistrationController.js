function barbershopRegistrationView (req, res) {
    res.render('barbershop-registration')
}

function barbershopCreate (req, res) {

    console.log(req.body)
    
    res.redirect('/login')

}

module.exports = {
    barbershopRegistrationView,
    barbershopCreate
}