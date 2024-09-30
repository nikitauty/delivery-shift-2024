import { z } from 'zod';

export const phoneSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .regex(/^\d{11}$/, 'Номер должен содержать 11 цифр'),
});

export type PhoneSchema = z.infer<typeof phoneSchema>;
