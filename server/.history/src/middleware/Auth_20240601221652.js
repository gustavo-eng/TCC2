//import { JsonWebTokenError } from "jsonwebtoken"

const jwt = require('jsonwebtoken');
require('dotenv').config();


// Essa rota apenas esta verificando se o token esta valido ou nao

module.exports = {

    controllAccess: (req, res, next) => {

        console.log('entrou no middleware controllAccess')

        let bearToken = req.headers['authorization'] || ""
        let token = bearToken.split(" ")

        if (token[0] == 'Bearer') {
            token = token[1];
        }

        jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {

            if (err) {
                return res.status(403).json({ msg: "Invalid token" });

            } else {

                req.user = decode.user;
                //req.userId
                //req.user = decode.user;
                //req.userPermission = decode.userPermission;
                //req.userId = decode.userId;
                console.log('middleware/auth. user --> ', req.user);

                next();
            }
        });
    },

}
