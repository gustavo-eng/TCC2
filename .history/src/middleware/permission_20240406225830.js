
const { fail } = require('../helpers/response');

module.exports = {
    permissionGym: (req, res, next) => {

        //const jwtUser = req.user
        //const user = await User.findUserByUsername(jwtUser.username)
        if (req.userPermission == 'gym') {
            return next();
        } else {
            return res.status(403).json(fail("Unauthorized User"));
        }
    },
    permissionFRPj: (req, res, next) => {

        //const jwtUser = req.user
        //const user = await User.findUserByUsername(jwtUser.username)
        if (req.userPermission == 'fprj') {
            return next();
        } else {
            return res.status(403).json({ error: 'Usuario não autorizado' });
        }
    },
}