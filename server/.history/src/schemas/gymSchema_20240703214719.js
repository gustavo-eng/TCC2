const { name } = require('ejs');
const { z } = require('zod');


const gymSchema = z.object({
    sensei: z.string({ invalid_type_error: "Must be a string" })
        .min(3).max(25),

    name: z.string({ invalid_type_error: "Must be a string" })
        .min(3).max(25)

});


module.exports = gymSchema;
