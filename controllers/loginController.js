function loginView(req,res) {
    res.render('login')
}

const users = [
    {
        id: 1,
        nome: 'Thiago Kido',
        email: 'thiago.ekido@gmail.com',
        senha: 'projetodh@123'
    },
    {
        id: 2,
        nome: 'João da Silva',
        email: 'joao.silva@gmail.com',
        senha: 'projetodh@123'
    }
]

function loginUser(req, res) {
    const validaLogin = req.body.loginEmail + req.body.loginPassword;
    const userFound = users.find( (usuario) => usuario.email == req.body.loginEmail );
    console.log(userFound)
    if (userFound == undefined) {
        res.send('Usuário não encontrado')
    } else if ((userFound.email + userFound.senha) == validaLogin) {
        res.redirect('/logged-area');
    } else {
        res.send('Usuário ou senha incorreta')
    }
}

module.exports = {
    loginView,
    loginUser
}