function loginView(req,res) {
    res.render('login')
}

const customers = [
    {
        id: 1,
        nome: 'Thiago Kido',
        email: 'thiago.ekido@gmail.com',
        senha: 'projetodh@123',
        telefone: '(21) 98765-1500'
    },
    {
        id: 2,
        nome: 'João da Silva',
        email: 'joao.silva@gmail.com',
        senha: 'projetodh@123',
        telefone: '(11) 98765-1980'
    }
]


//VALIDAÇÃO DE LOGIN DO USUÁRIO
function loginValidation(req, res) {
    const validaLogin = req.body.loginEmail + req.body.loginPassword;
    const userFound = customers.find( (usuario) => usuario.email == req.body.loginEmail );
    console.log(userFound)
    if (userFound == undefined) {
        res.send('Usuário não encontrado')
    } else if ((userFound.email + userFound.senha) == validaLogin) {
        res.redirect('/login/customer/' + userFound.id);
    } else {
        res.send('Usuário ou senha incorreta')
    }
}

//REDIRECIONAMENTO PARA ÁREA LOGADA DE ACORDO COM O USUÁRIO
function loggedCustomer(req, res) {
    const idCustomer = req.params.id
    const customer = customers.find( (user) => user.id == idCustomer )
    res.render('logged-area', customer)
}

module.exports = {
    loginView,
    loginValidation,
    loggedCustomer
}