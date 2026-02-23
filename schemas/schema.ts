import {z} from 'zod'

export const loginSchema = z.object({
  username: z.string().min(1, 'Username field required!'), 
  password: z.string().min(1, 'Password field required!')
})