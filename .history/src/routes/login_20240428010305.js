var express = require('express');
var router = express.Router();

const { returnUser } = require('../controllers/verifyTypeOfUser');


require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});

router.post('/', async (req, res) => {
    let cont = 1;
    let { email, password } = req.body;

    try {
        // Chamar a função returnUser e aguardar o resultado usando async/await
        const user = await returnUser(email, password);

        // Se o usuário existir, definir a permissão e criar o token JWT
        if (user) {
            console.warn("---  user ----")
            console.log(user)
            let permission;
            if (user.role === 'fprj') {
                permission = 'fprj';
            } else if (user.role === 'gym') {
                permission = 'gym';
            } else {
                permission = 'student';
            }
            //user[User.primaryKeyAttribute()]
            console.log('cord')
            console.log(`user.role --> ${user.role}`)
            console.log(user[`cod_${user.role}`])
            //`user.role -->${user.cod}_${user.role}`

            let token = jwt.sign({ user: email, userPermission: permission, userId: cont++ }, process.env.SECRET_JWT, { expiresIn: '24h' });

            res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });
        } else {
            // Se o usuário não existir, retornar uma resposta 404
            res.status(404).json({ isLogged: false, msg: 'User not found' });
        }
    } catch (err) {
        // Se ocorrer algum erro ao buscar o usuário, retornar uma resposta 500
        console.error("Erro ao descobrir usuário:", err);
        res.status(500).json({ isLogged: false, msg: 'Error finding user' });
    }

});



module.exports = router;