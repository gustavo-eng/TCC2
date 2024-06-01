const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        return res.status(500).json({ status: false, errors: err })

    }
}

module.exports = validate;