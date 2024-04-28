
const { fail } = require('../helpers/response');
//todo criptografar permissoes
module.exports = {
    permissionGym: (req, res, next) => {
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
            return res.status(403).json(fail('Unauthorized User'));
        }//Usuario não autorizado'
    },
    //permissionStudent
    //allPermission
}
