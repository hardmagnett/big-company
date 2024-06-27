
import { z } from 'zod';

export const formSchema = z.object({
  email: z.string()
    .min(1, { message: "Email обязателен" })
    .min(3, {message: 'Минимальная длина: 3'})
    .max(50)
  ,
  name: z.string()
    .min(1, { message: "Имя обязательно" })
    .min(3, {message: 'Минимальная длина: 3'})
  ,
});
export type Form = z.infer<typeof formSchema>
export type FormErrors = z.inferFormattedError<typeof formSchema>
