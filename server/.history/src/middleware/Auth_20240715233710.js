const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = {

    controllAccess: (req, res, next) => {

        let bearToken = req.headers['authorization'] || ""
        let token = bearToken.split(" ")

        if (token[0] == 'Bearer') {
            token = token[1];
        }

        jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {

            if (err) {
                return res.status(403).json({ msg: "Invalid token" });

            } else {
                console.log('req.user')
                console.log(req.user)
                req.user = decode.user;
                req.userId = decode.userId
                req.userPermission = decode.userPermission;

                next();
            }
        });
    },

}
