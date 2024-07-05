const { z } = require('zod');

const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
};

// Função de validação para verificar a extensão do arquivo
const isValidFileExtension = (fileName) => {
    const validExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    return fileExtension && validExtensions.includes(fileExtension);
};

// Schema para validar o nome do arquivo
const fileSchema = z.string().refine((fileName) => isValidFileExtension(fileName), {
    message: 'O arquivo deve ter uma extensão .jpg, .jpeg ou .png',
});

const paymentSchema = z.object({
    aproved: z.boolean().optional(),

    description: z.string(objectErrorString)
        .min(5, { message: "Must be at least 5 characters" })
        .max(255, { message: "Must contain a maximum of 255 characters" })
        .nullable().optional(),

    idAthlete: z.string().or(z.number()),
    idEvent: z.number(),
    idjategory: z.string().optional(),

    // Adicionando o campo de nome de arquivo
    file: fileSchema,
});

module.exports = paymentSchema;
