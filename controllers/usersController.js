const { Customer } = require('../api/models')

function loginView(req,res) {

    res.render('login')

}

function signupView(req, res) {

    res.render('signup')

}

async function createCustomer (req, res) {
    
    const { first_name, last_name, email, cpf, phone_number } = req.body

    const result = await Customer.create({
        first_name,
        last_name,
        email,
        cpf,
        phone_number,
        active: true
    })

    console.log({result})

    res.redirect('/users/login')

}

async function updateCustomer (req, res) {

    const idCustomer = req.params.id

    const { first_name, last_name, email, cpf, phone_number, active } = req.body

    const result = await Customer.update({
        first_name,
        last_name,
        email,
        cpf,
        phone_number,
        active
    },
    {
       where: {
           id: idCustomer
       } 
    })
    res.send({result})
}

async function findCustomer (req, res) {

    const customerEmail = req.body.email

    const result = await Customer.findAll({
        where: {
            email: customerEmail
        }
    })

    console.log(result[0].dataValues)

    res.render('logged-area', result[0].dataValues)

}

module.exports = {
    loginView,
    signupView,
    createCustomer,
    updateCustomer,
    findCustomer
}