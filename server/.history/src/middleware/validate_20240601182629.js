const { fail } = require('../helpers/response');
const formatZodErrors = require('../helpers/formatZodErrors');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        return res.status(500).json(fail("Error in validation. Error -> " + err))
    }
}

module.exports = validate;