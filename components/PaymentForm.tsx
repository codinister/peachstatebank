'use client';

import { paymentSchema } from '@/schemas/schema';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import PaymentSummary from './PaymentSummary';
import settings from '@/data/settings';
import Link from 'next/link';
import { useState } from 'react';
import Verification from './Verification';

const PaymentForm = () => {
  const [getData, setData] = useState<any>([]);
  const [verify, setVerify] = useState(false);
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      transfer_from: String(settings?.account_number),
      transfer_to: '',
      amount: '',
      purpose: '',
      beneficiary_email: '',
      ben_name: '',
    },
  });

  const formSubmit = (data: z.infer<typeof paymentSchema>) => {
    const info = [
      {
        title: 'Transfer Type',
        sub_title: 'Domestic: ' + settings?.comp_name,
      },
      {
        title: 'Beneficiary Account Number',
        sub_title: data?.transfer_to,
      },
      {
        title: 'Account Name',
        sub_title: data?.ben_name.toUpperCase(),
      },
      {
        title: 'Beneficiary Email',
        sub_title: data?.beneficiary_email,
      },

      {
        title: 'Transfer From',
        sub_title: data?.transfer_to,
      },

      {
        title: 'Amount',
        sub_title: settings?.currency + '' + data?.amount,
      },

      {
        title: 'Note',
        sub_title: 'Payment',
      },
    ];

    setData(info);
  };

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;

  if (verify) {
    return <Verification />;
  } else if (isSubmitSuccessful) {
    return (
      <>
        <PaymentSummary data={getData} />
        <div className="flex gap-2 mt-4">
          <Button
            className="w-max cursor-pointer"
            onClick={() => setVerify(true)}
          >
            Confirm
          </Button>
          <Link href="/dashboard">
            <Button variant="outline" className="w-max">
              Cancel
            </Button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <form className="p-6 max-w-80" onSubmit={handleSubmit(formSubmit)}>
        <Form {...form}>
          <FormField
            name="transfer_from"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Transfer from</FormLabel>
                <Input type="text" disabled {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="transfer_to"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Beneficiary Account Number</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="ben_name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Beneficiary Name</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="amount"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Amount ($)</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="purpose"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Purpose</FormLabel>
                <Input type="text" {...field} />
                <FormDescription>80 characters left</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="beneficiary_email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Beneficiary Email</FormLabel>
                <Input type="email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button className="w-max">Pay</Button>

            <Link href="/dashboard">
              <Button variant="outline" className="w-max">
                Cancel
              </Button>
            </Link>
          </div>
        </Form>
      </form>
    );
  }
};

export default PaymentForm;
