const statusCode = require('../utils/statusCode.json');
const validate = (schema) => (req, res, next) => {

    try {

        schema.parse(req.body);
        /*
        if (req.method === 'POST') {
            schema.parse(req.body);
        } else if (req.method === 'PUT') {
            schema.partial().parse(req.body);
        }
        */
        next();

    } catch (err) {
        return res.status(statusCode.UNAUTHORIZED).json({ status: false, errors: err });

    }
}

module.exports = validate;

