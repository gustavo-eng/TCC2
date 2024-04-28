var express = require('express');
var router = express.Router();
const requirementsDAO = require('../model/requirements');
const { returnUser } = require('../controllers/verifyTypeOfUser');


require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});


router.post('/', async (req, res) => {

    let { email, password } = req.body;
    let msg = ''
    try {

        // Chamar a função returnUser e aguardar o resultado usando async/await
        const user = await returnUser(email, password);
        // Se o usuário existir, definir a permissão e criar o token JWT
        if (user) {

            console.log(`codigo do user returned`);
            console.log(user[`cod_${user.role}`]);
            console.log('user')
            console.log(user)

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
                    return res.status(401).json({ isLogged: false, msg: 'User not authenticated!!' });
                });
            } else {
                let token = jwt.sign({ user: email, userPermission: user.role, userId: user[`cod_${user.role}`] }, process.env.SECRET_JWT, { expiresIn: '24h' });
                return res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });
            }

        } else {
            // Se o usuário não existir, retornar uma resposta 404
            return res.status(404).json({ isLogged: false, msg: 'User not found' });
        }
    } catch (err) {
        // Se ocorrer algum erro ao buscar o usuário, retornar uma resposta 500
        console.error("Erro ao descobrir usuário:", err);
        res.status(500).json({ isLogged: false, msg: 'Error finding user' });
    }


});



module.exports = router;