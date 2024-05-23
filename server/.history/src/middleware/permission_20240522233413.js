
const { fail } = require('../helpers/response');

//todo tirar esse formato de verificacao.
//todo eu verifico se o usuario com id tal, tem a propriedade role com a.
// todo permissao adequada para aquela rota.




module.exports = {
    permissionGym: (req, res, next) => {
        if (req.userPermission == 'gym') {
            return next();
        } else {
            return res.status(403).json(fail("Unauthorized User. This user must be a gym"));
        }
    },
    permissionFRPj: (req, res, next) => {
        if (req.userPermission == 'fprj') {
            return next();
        } else {
            return res.status(403).json(fail('Unauthorized User. This user must be the federation'));
        }
    },
    globalEntitiesPermission: (req, res, next) => {
        if (req.userPermission == 'fprj' || req.userPermission == 'gym') {
            return next();
        } else {
            return res.status(403).json(fail('Unauthorized User. This user must be the federation or a gym'));
        }
    }
}





