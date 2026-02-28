import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Username field required!'),
  password: z.string().min(1, 'Password field required!'),
});


export const verificationSchema = z.object({
  verify: z.string().min(1, 'Verification field required!')
});

export const paymentSchema = z.object({
  transfer_from: z.string().min(12, 'Transfer from field required!'),
  transfer_to: z.string().min(12, 'Beneficiary Account Number field required!'),
  amount: z.string().min(1, 'Amount field required!'),
  purpose: z.string().min(1, 'Purpose field required!'),
  beneficiary_email: z.string().min(1, 'Beneficiary Email field required!'),
    ben_name: z.string().min(1, 'Beneficiary Name field required!'),
});
