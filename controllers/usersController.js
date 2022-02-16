const { Customer } = require('../api/models')

function loginView(req,res) {
    res.render('login')
}

// const customers = [
//     {
//         id: 1,
//         nome: 'Thiago Kido',
//         email: 'thiago.ekido@gmail.com',
//         senha: 'projetodh@123',
//         telefone: '(21) 98765-1500'
//     },
//     {
//         id: 2,
//         nome: 'João da Silva',
//         email: 'joao.silva@gmail.com',
//         senha: 'projetodh@123',
//         telefone: '(11) 98765-1980'
//     }
// ]


//VALIDAÇÃO DE LOGIN DO USUÁRIO
// function loginValidation(req, res) {

//     const validaLogin = req.body.loginEmail + req.body.loginPassword;

//     const userFound = customers.find( (usuario) => usuario.email == req.body.loginEmail );

//     console.log(userFound)

//     if (userFound == undefined) {

//         res.send('Usuário não encontrado')

//     } else if ((userFound.email + userFound.senha) == validaLogin) {

//         res.redirect('/users/customer/' + userFound.id);

//     } else {

//         res.send('Usuário ou senha incorreta')

//     }

// }

//REDIRECIONAMENTO PARA ÁREA LOGADA DE ACORDO COM O USUÁRIO
function loggedCustomer(req, res) {

    const idCustomer = req.params.id

    const customer = customers.find( (user) => user.id == idCustomer )

    res.render('logged-area', customer)

}

function signupView (req, res) {

    res.render('signup')

}

// function signupCreate (req, res) {

//     console.log(req.body)

//     res.redirect('/users/login')

// }

// async function index (req, res) {
//     const customers = await Customer.findAll()
//     res.send({customers})
// }

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
    loggedCustomer,
    signupView,
    createCustomer,
    updateCustomer,
    findCustomer
}