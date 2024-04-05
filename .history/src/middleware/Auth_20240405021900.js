//import { JsonWebTokenError } from "jsonwebtoken"

const jwt = require('jsonwebtoken');
require('dotenv').config();

//process.env.SECRET_JWT

// Essa rota apenas esta verificando se o token esta valido ou nao

module.exports = {

    controllAccess: (req, res, next) => {
        let bearToken = req.headers['authorization'] || ""
        let token = bearToken.split(" ")

        if (token[0] == 'Bearer') {
            token = token[1];
        }

        jwt.verify(token, process.env.SECRET_JWT, (err, obj) => {
            if (err) {
                res.status(403).json({ msg: "Invalid token" });

            } else {
                req.user = obj.user;
                req.userPermission = obj.userPermission;
                next();
            }
        });
    },


}