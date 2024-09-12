import { z } from 'zod';


export interface AuthState {
    user?:  any | null; //todo Tipar melhor
    loading?: boolean;
    error?: string | null;
    userPermission?: any;
    permissionError?: boolean;

}

export const authLoginSchema = z.object({
    email: z.string().email({message: 'Type email invalid'}),
    password: z.string({message: 'Type password invalid'})
});


export const authResponseSchema = z.object({
    user: z.boolean().optional(),
    token: z.string().optional(),
    isLogged: z.boolean().optional(),
    msg: z.string().optional(),
    userPermission: z.string().optional()
});


export type AuthLogin = z.infer<typeof authLoginSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;

/*
{
	"status": true,
	"isLogged": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibHV0YWRvcjMiLCJ1c2VyUGVybWlzc2lvbiI6ImF0aGxldCIsInVzZXJJZCI6NywiaWF0IjoxNzI2MDk2NzQ3LCJleHAiOjE3MjYxODMxNDd9.tmOzSkPx6ziNiixL-WLN22rTgfCFgx3dOTqBQl40RQI",
	"msg": "User successfully authenticated",
	"userPermission": "athlet"
}
*/