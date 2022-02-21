const { Customer } = require('../api/models')

module.exports = {

    //Creates a new customer register
    createCustomer: async (req, res) => {

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

        // res.render(result)

    },

    //Renders login page
    loginView: (req, res) => {

        res.render('login')

    },

    //Renders sign up page
    signupView: (req, res) => {

        res.render('signup')

    },

    //updates customer register 
    updateCustomer: async (req, res) => {

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

    },

    //finds customer register using customer email
    findCustomer: async (req, res) => {

        const customerEmail = req.body.email

        const result = await Customer.findAll({
            where: {
                email: customerEmail
            }
        })

        console.log(result[0].dataValues)

        res.render('logged-area', result[0].dataValues)

    },

    //finds customer register using customer id
    findCustomerById: async (req, res) => {

        const customerId = req.params.id

        const result = await Customer.findAll({
            where: {
                id: customerId
            }
        })

        console.log(result[0].dataValues)

        res.send(result)
    
    }
    
}