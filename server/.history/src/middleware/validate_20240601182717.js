const { fail } = require('../helpers/response');
const formatZodErrors = require('../helpers/formatZodErrors');
const formatZodErrors = require('../helpers/formatZodErrors');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        const formatZodErrors = formatZodErrors(err.errors);
        return res.status(500).json(fail("Error validate: " + formatZodErrors))
    }
}

module.exports = validate;