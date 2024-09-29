
import { z } from 'zod';

export const registerEventSchema = z.object({
    description: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    price: z.any(),
    startDate: z.any().optional(),
    endDate: z.any().optional(),
    neighborhood: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    street: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    number: z.any(),
    city: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    idTypeEvent: z.any(),

});

export type registerEvent = z.infer<typeof registerEventSchema>;