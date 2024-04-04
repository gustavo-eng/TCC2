//import { JsonWebTokenError } from "jsonwebtoken"

const jwt = require('jsonwebtoken');

module.exports = {
    controllAccess: (req, res, next) => {
        let bearToken = req.headers['Authorization'] || ""
        let token = bearToken.split(" ")
        if (token[0] == 'Bearer') {
            token = token[1]
        }
        //jwt.verify(token, )
    },
    soma: (a = 0, b = 0) => { // teste
        return a + b;
    },

}