
const { fail } = require('../helpers/response');
//todo criptografar permissoes
module.exports = {
    permissionGym: (req, res, next) => {
        if (req.userPermission == 'gym') {
            return next();
        } else {
            return res.status(403).json(fail("Unauthorized User. This user must be a gym"));
        }
    },
    permissionFRPj: (req, res, next) => {
        //const jwtUser = req.user
        //const user = await User.findUserByUsername(jwtUser.username)
        console.log("req.userPermission")
        console.log(req.userPermission)
        if (req.userPermission == 'fprj') {
            return next();
        } else {
            return res.status(403).json(fail('Unauthorized User. This user must be the federation'));
        }//Usuario não autorizado'
    },
    //permissionStudent
    //allPermission
}
