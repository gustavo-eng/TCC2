
const { fail } = require('../helpers/response');


module.exports = {
    permissionGym: (req, res, next) => {
        if (req.userPermission == 'gym') {
            next();
        } else {
            return res.status(403).json(fail("Unauthorized User. This user must be a gym"));
        }
    },
    permissionFRPj: (req, res, next) => {
        if (req.userPermission == 'fprj') {
            next();
        } else {
            return res.status(403).json(fail('Unauthorized User. This user must be the federation'));
        }
    },
    permissionBothEntities: (req, res, next) => {
        if (req.userPermission == 'fprj' || req.userPermission == 'gym') {
            next();
        } else {
            return res.status(403).json(fail('Unauthorized User. This user must be the federation or a gym'));
        }
    }
};