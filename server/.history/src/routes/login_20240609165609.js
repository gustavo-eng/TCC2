var express = require('express');
var router = express.Router();
var db = require('../config/db')

const verifyUser = require('../middleware/verifyTypeUser');
const isAcceptedAthlet = require('../middleware/verifyAcceptAthlet');

require('dotenv').config();
// jwt
const jwt = require('jsonwebtoken');
const { message } = require('../helpers/response');


//Rota teste para pagamento
router.post("/", (req, res) => {
    // let { email, password } = req.body;
    //res.status(200).json({ msg: "Rota de login para teste" })

    let { name, password } = req.body;

    if (name != '' && password != '') {
        let token = jwt.sign({ user: name }, process.env.SECRET_JWT, { expiresIn: '24h' });
        return res.json({ isLogged: true, token: token });
    } else {
        return res.status(200).json({ msg: 'Empty data' });
    }

});


router.post('/signIn', async (req, res) => {

    let { email, password } = req.body;

    try {

        let user = await verifyUser({ email: email, password: password });

        //if(!user) return res.status(404).jsonp({})
        if (user.role.includes('athlet')) {

            let isAccepted = await isAcceptedAthlet(1);

            console.log('isAccepted ' + isAccepted)



        } else {

        }

        res.status(200).json(message("Ola"))

    } catch (err) {
        console.log('teste 2 eerrrr')
    }

})


module.exports = router;

/*


router.post('/', async (req, res) => {
    let { email, password } = req.body;
    try {
        // Chamar a função returnUser e aguardar o resultado usando async/await
        const user = await returnUser(email, password);
        // Se o usuário existir, definir a permissão e criar o token JWT
        if (user) {
            if (user.role == "student") {
                requirementsDAO.verifyAuthenticationStudent(user[`cod_${user.role}`]).then(requirement => {
                    let solicitation = requirement.get({ plain: true });
                    if (solicitation.aproved) {
                        let token = jwt.sign({ user: email, userPermission: user.role, userId: user[`cod_${user.role}`] }, process.env.SECRET_JWT, { expiresIn: '24h' });
                        return res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });
                    } else {
                        return res.status(401).json({ isLogged: false, msg: 'Solicitation pending. . .' });
                    }
                }).catch(err => {
                    console.log('Erro ao utilizar a funcao verifyAuthenticationStudent')
                    return res.status(401).json({ isLogged: false, msg: 'User not authenticated!!' });
                });
            } else {
                let token = jwt.sign({ user: email, userPermission: user.role, userId: user[`cod_${user.role}`] }, process.env.SECRET_JWT, { expiresIn: '24h' });
                return res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });
            }

        } else {
            return res.status(404).json({ isLogged: false, msg: 'User not found' });
        }
    } catch (err) {
        // Se ocorrer algum erro ao buscar o usuário, retornar uma resposta 500
        console.error("Erro ao descobrir usuário:", err);
        res.status(500).json({ isLogged: false, msg: 'Error finding user' });
    }

});
*/

