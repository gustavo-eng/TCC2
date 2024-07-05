const { z } = require('zod');

const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
};

// Definindo o esquema base para um arquivo
const fileSchema = z.instanceof(File);

// Adicionando a validação para extensões permitidas
const imageFileSchema = fileSchema.refine((file) => {
    const validExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return fileExtension && validExtensions.includes(fileExtension);
}, {
    message: 'O arquivo deve ter uma extensão .jpg, .jpeg ou .png',
});

const paymentSchema = z.object({
    aproved: z.boolean().optional(),

    description: z.string(objectErrorString)
        .min(5, { message: "Must be at most 5 characteres" })
        .max(255, { message: "Must contain a maximum of 255 characters" })
        .nullable().optional(),

    idAthlete: z.string(),
    idEvent: z.string(),
    idCategory: z.string().optional(),

    // Adicionando o campo de arquivo
    file: imageFileSchema.optional()
});

module.exports = paymentSchema;
