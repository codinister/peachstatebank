'use client';

import { loginSchema } from '@/schemas/schema';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const route = useRouter();
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const formSubmit = (data: z.infer<typeof loginSchema>) => {
    const username = process.env.NEXT_PUBLIC_USER_NAME;
    const password = process.env.NEXT_PUBLIC_PASSWORD;
    setError(false);
    if (username === data?.username && password === data?.password) {
      sessionStorage.setItem('lgn', '1');
      route.push('/dashboard');
    } else {
      setError(true);
    }
  };

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;

  return (
    <form className="p-6" onSubmit={handleSubmit(formSubmit)}>
      {error === true ? (
        <p className="text-red-600">
          We can't find that username and password. Try again.
        </p>
      ) : (
        <h6 className="mb-6">Welcome</h6>
      )}

      <Form {...form}>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Username</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="my-4">
          <input type="checkbox" /> Remember me
        </div>
        <Button className="w-full">
          {error ? 'Sign in' : isSubmitSuccessful ? '...wait' : 'Sign in'}
        </Button>

        <a href="#" className="text-secondary">
          Forgot username/password
        </a>
      </Form>
    </form>
  );
};

export default LoginForm;
