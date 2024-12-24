import { z } from "zod";

const userValidationSchema = z.object({

    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be string'
    }),

})

export const userValidation = {
    userValidationSchema
}

