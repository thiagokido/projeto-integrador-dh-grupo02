const { Customer } = require('../api/models')

const customerController = {

    //render login view
    loginView: ( req, res ) => {

        res.render('login')

    },

    //find customer by id
    loggedCustomer: async ( req, res ) => {

        const idCustomer = req.params.id

        const result = await Customer.findAll({
            where: {
                id: idCustomer
            }
        })

        console.log({result})

        res.render('logged-area', result[0].dataValues)

    },

    //render signup view
    signupView: ( req, res ) => {

        res.render('signup')

    },

    //create new customers
    createCustomer: async ( req, res ) => {

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

    },

    //update customer register
    updateCustomer: async ( req, res ) => {

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

    //find customer by email
    findCustomer: async ( req, res ) => {

        const customerEmail = req.body.email

        const result = await Customer.findAll({
            where: {
                email: customerEmail
            }
        })
        
        console.log(result[0].dataValues)
        
        res.render('logged-area', result[0].dataValues)
        
    }
    
}

module.exports = customerController