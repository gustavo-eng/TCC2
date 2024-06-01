const { fail } = require('../helpers/response');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
    } catch (err) {
        return
    }
}