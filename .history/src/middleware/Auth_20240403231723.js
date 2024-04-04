//import { JsonWebTokenError } from "jsonwebtoken"

const jwt = require('jsonwebtoken');

module.exports = {
    controllAccess: (req, res, next) => {

        jwt.verify()
    },
    soma: (a = 0, b = 0) => { // teste
        return a + b;
    },

}