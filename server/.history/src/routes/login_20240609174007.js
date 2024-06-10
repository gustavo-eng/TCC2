var express = require('express');
var router = express.Router();
var db = require('../config/db')

const verifyUser = require('../middleware/verifyTypeUser');
const isAcceptedAthlet = require('../middleware/verifyAcceptAthlet');

require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');
const { message, fail } = require('../helpers/response');


//Rota teste para pagamento
router.post("/", (req, res) => {

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

        if (user.role.includes('athlet')) {

            let isAccepted = await isAcceptedAthlet(user.idAthlete);

            if (isAccepted) {
                let token = jwt.sign({ user: user.name, userPermission: user.role, userId: user.idAthlete }, process.env.SECRET_JWT, { expiresIn: '24h' });
                console.log('userPermission', user.role);
                return res.json({ status: true, isLogged: true, token: token, msg: 'User successfully authenticated' });
            } else {
                res.status(401).json(fail("Request pending..."));
            }

        } else { // Gym or FPRJ
            let token = jwt.sign({ user: user.name, userPermission: user.role, userId: user.idAthlete }, process.env.SECRET_JWT, { expiresIn: '24h' });
            console.log('userPermission', user.role);
            return res.json({ status: true, isLogged: true, token: token, msg: 'User successfully authenticated' });
        }

    } catch (err) {
        res.status(500).json(fail("Error server. Error -> " + err));
    }

});

// Rota de Sign-Out
app.post('/signOut', authenticateToken, (req, res) => {
    req.header('Authorization').replace('Bearer ', '');

    res.status(200).json({ message: 'Signed out successfully' });
});




/*
{
  idAthlete: 1,
  cpf: '07770398932',
  rg: '1.2.3.4',
  birth: null,
  phone: null,
  name: 'gustavo',
  email: 'gustavo@hotmail.com',
  role: 'athlet',
  password: 'diasgustavodias',
  createdAt: 2024-06-09T13:42:54.000Z,
  updatedAt: 2024-06-09T13:42:54.000Z,
  idAddress: null,
  idGym: 1
}
*/


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

