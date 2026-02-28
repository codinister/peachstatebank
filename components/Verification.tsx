'use client';

import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { verificationSchema } from '@/schemas/schema';
import { z } from 'zod';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Verification = () => {
  const [error, setError] = useState(false);
  const [count, setCounter] = useState(4);
  const form = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      verify: '',
    },
  });

  const formSubmit = (data: z.infer<typeof verificationSchema>) => {
    setError(true);
    setCounter((prev) => {
      return prev - 1;
    });
  };

  const {
    handleSubmit
  } = form;

  const route = useRouter();

  useEffect(() => {
    if (count === 0) {
      route.push('/dashboard');
    }
  }, [count]);

  return (
    <div>
      <b>One Time Verification</b>
      <p className="my-6">
        A Verification code has been sent to your registered mobile number or
        Email address. Please enter code
      </p>

      <form className="max-w-80" onSubmit={handleSubmit(formSubmit)}>
        {error === true ? (
          <p className="text-red-600 mb-4">Invalid Code. Try again.</p>
        ) : (
          ''
        )}

        <Form {...form}>
          <FormField
            name="verify"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Verification Code</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="my-4">
            <p className="text-blue-700 cursor-pointer ">Resend Code</p>
            <p className="text-black/50">Attempts left {count}</p>
          </div>

          <div className="mb-8">
            <p>Reference Number </p>
            <p className="w-max p-1 bg-gray-400">5756322</p>
          </div>

          <div className="flex gap-2">
            <Button>Submit</Button>
            <Link href="/dashboard">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </Form>
      </form>
    </div>
  );
};

export default Verification;
