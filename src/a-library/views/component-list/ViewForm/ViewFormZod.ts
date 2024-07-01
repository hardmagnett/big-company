
import { z } from 'zod';

export const formSchema = z.object({
  user: z.object({
    name: z.string()
      .min(1, { message: "Имя обязательно" })
      .min(3, {message: 'Минимальная длина: 3'})
    ,
    email: z.string()
      .email({message: 'Укажите правильный Email'})
      // .email({message: 'Нужно указать правильный Email'})
      // .optional()  // Пусть пока-что здесь побудет. Вроде и без него работает, но убедиться, когда всё проверишь. И в гисты потом.
      .or(z.literal(''))  // Эта строка делает поле опциональным.
    ,

    address: z.string()
      .min(1, { message: "Адрес обязателен" })
      .min(10, {message: 'Минимальная длина: 10'})
    ,
  }),
  books: z.array(
    z.object({
      name: z.string().min(3, {message: 'Минимальная длина: 3'}),
      quantity: z.number().int().min(1)
    }))
    .min(1, {message: 'Укажите хотя-бы одну книгу'}),

  agreeWithConditions: z.boolean().refine((val) => val, {
    message: "Please read and accept the terms and conditions",
  }),
  sendSpam: z.boolean()
});
export type FormSchema = z.infer<typeof formSchema>

// Ввидосе он как-то по другому сделал nullable-тип
export type FormErrors = z.inferFormattedError<typeof formSchema> | null
