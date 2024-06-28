
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
  books: z.array(
    z.object({
      name: z.string().min(3, {message: 'Минимальная длина: 3'}),
      quantity: z.number().int().min(1)
    }))
    .min(1, {message: 'Укажите хотя-бы одну книгу'}),
  unnecessary: z.string(),
  agreeWithConditions: z.boolean().refine((val) => val, {
    message: "Please read and accept the terms and conditions",
  })
});
export type FormSchema = z.infer<typeof formSchema>

// Ввидосе он как-то по другому сделал nullable-тип
export type FormErrors = z.inferFormattedError<typeof formSchema> | null
