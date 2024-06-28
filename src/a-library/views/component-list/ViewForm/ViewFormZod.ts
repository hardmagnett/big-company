
import { z } from 'zod';

export const formSchema = z.object({
  user: z.object({
    name: z.string()
      .min(1, { message: "Имя обязательно" })
      .min(3, {message: 'Минимальная длина: 3'})
    ,
    email: z.string()
      .min(1, { message: "Email обязателен" })
      .min(3, {message: 'Минимальная длина: 3'})
      .email({message: 'Укажите правильный Email'})
      .max(50)
    ,
  }),
  unnecessary: z.string()
});
export type FormSchema = z.infer<typeof formSchema>

// Ввидосе он как-то по другому сделал nullable-тип
export type FormErrors = z.inferFormattedError<typeof formSchema> | null
