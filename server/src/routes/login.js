var express = require('express');
var router = express.Router();
const returnUser = require('../helpers/verifyTypeUser');
const isAcceptedAthlet = require('../helpers/verifyAcceptAthlet');
const bcrypt = require('bcrypt');
const statusCode = require('../utils/statusCode.json');
require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');
const { fail } = require('../helpers/response');

router.post("/signIn", async (req, res) => {

    let { email, password } = req.body;
    console.log('login body ')
    console.log(req.body)

    try {
        let user = await returnUser({ email: email });
        if (!user) {
            return res.status(statusCode.NOT_FOUND).json(fail("User not found!"));
        }

        let passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(statusCode.UNAUTHORIZED).json(fail("Invalid Credentials"));
        }

        if (user.role.includes('athlet')) {
            let isAccepted = await isAcceptedAthlet(user.idAthlete);

            if (isAccepted) {
                let token = jwt.sign({ user: user.name, userPermission: user.role, userId: user.idAthlete }, process.env.SECRET_JWT, { expiresIn: '24h' });
                return res.json({ user: user, status: true, isLogged: true, token: token, msg: 'User successfully authenticated', userPermission: user.role });
            } else {
                return res.status(statusCode.NOT_FOUND).json(fail("Request pending..."));
            }
        } else { // Gym or FPRJ
            let token = '';
            if (user.role.includes('fprj')) {
                token = jwt.sign({ user: user.role, userPermission: user.role, userId: user.idFprj }, process.env.SECRET_JWT, { expiresIn: '24h' });
            } else {
                token = jwt.sign({ user: user.name, userPermission: user.role, userId: user.idGym }, process.env.SECRET_JWT, { expiresIn: '24h' });
            }
            return res.json({ user: user, status: true, isLogged: true, token: token, msg: 'User successfully authenticated', userPermission: user.role });
        }

    } catch (err) {
        return res.status(statusCode.UNAUTHORIZED).json(fail("Server error: " + err));
    }

});

module.exports = router;


































//Rota teste para pagamento
/*
router.post("/", (req, res) => {

    let { name, password } = req.body;

    if (name != '' && password != '') {
        let token = jwt.sign({ user: name }, process.env.SECRET_JWT, { expiresIn: '2s' });
        return res.json({ isLogged: true, token: token });
    } else {
        return res.status(200).json({ msg: 'Empty data' });
    }

});
*/





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

