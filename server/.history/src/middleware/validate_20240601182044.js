const { fail } = require('../helpers/response');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        return res.status(500).json(fail("Error in validation. Error -> " + JSON.parse(err)))
    }
}

module.exports = validate;