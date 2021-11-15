function signupView (req, res) {
    res.render('signup')
}

function signupCreate (req, res) {

    console.log(req.body)

    res.redirect('/login')

}

module.exports = {
    signupView,
    signupCreate
}