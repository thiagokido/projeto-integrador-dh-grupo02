const Customer = require('../api/models/Customer')
const Schedule = require('../api/models/Schedule')
const { QueryTypes } = require('sequelize')
const sequelize = require('../api/config')

//Creates a new customer register
async function createCustomer(req, res) {

    try {
        const { first_name, last_name, email, cpf, phone_number } = req.body

        const result = await Customer.create({
            first_name,
            last_name,
            email,
            cpf,
            phone_number,
            active: true
        })

        return res.json(result)

    } catch (error) {
        return res.json({message: error.message})
    }
}

//updates customer register 
async function updateCustomer(req, res) {

    const idCustomer = req.params.id

    try {
    
        const { first_name, last_name, email, cpf, phone_number, active } = req.body
    
        const result = await Customer.update({
            first_name,
            last_name,
            email,
            cpf,
            phone_number,
            active: true
        },
        {
        where: {
            id: idCustomer
        } 
        })

        return res.json(result)

    } catch (error) {
        return res.json({message: error.message})
    }
}

//finds customer register using customer email
async function findCustomer(req, res) {

    console.log(req.body)

    try {
        const customerEmail = req.body.email

        console.log(customerEmail)
    
        const customer = await Customer.findAll({
            where: {
                email: customerEmail
            }
        })
        
        const result = {
            id: customer[0].dataValues.id,
            first_name: customer[0].dataValues.first_name,
            last_name: customer[0].dataValues.last_name,
            email: customer[0].dataValues.email
        }

        console.log(result)
        return res.json(result)

    } catch (error) {
        return res.json({message: error.message})
    }
}

//finds customer register using customer id
async function findCustomerById(req, res) {

    const customerId = req.params.id

    try {

        const result = await Customer.findAll({
            where: {
                id: customerId
            }
        })
    
        console.log(result[0].dataValues)
    
        return res.json(result)

    } catch (error) {
        return res.json({message: error.message})
    }
}

async function findUserSchedules( req, res ) {
    
    const customerId = req.params.id
    
    try {
        const schedules = await sequelize.query("SELECT schedules.*, barbershops.name, barbershops.address, barbershops.cnpj, barbershops.zip_code,barbershops.district, barbershops.city, barbershops.state FROM schedules INNER JOIN barbershops on schedules.barbershop_id = barbershops.id WHERE schedules.customer_id ="+customerId+" order by schedules.createdAt desc", {type: QueryTypes.SELECT})
        return res.json(schedules)
        
     } catch (error) {
         return res.json({message: error.message})
     }
}

async function checkEmail (req, res) {

    console.log(req.body.email)

    const emailCustomer = req.body.email

    try {
        const customers = await sequelize.query("SELECT * FROM customers WHERE email='"+emailCustomer+"'", {type: QueryTypes.SELECT})
        return res.json(customers.length)
    } catch (error) {
        return res.jso({message: error.message})
    }
}


//Renders login page
function loginView(req, res) {
    
    res.render('login')
    
}

//Renders sign up page
function signupView(req, res) {
    
    res.render('signup')
    
}

module.exports = {
    createCustomer,
    loginView,
    signupView,
    updateCustomer,
    findCustomer,
    findCustomerById,
    findUserSchedules,
    checkEmail
}


